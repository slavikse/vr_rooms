import { io } from "socket.io-client";
import { CONNECTION_OPTIONS } from "./constants";

const broadcastFrequency = 1000 / 60;

let socket;
let clientIdSelf;
let socketBroadcastId;
let previousClientStateHash = "";

export function gameConnection({ roomId, clientsStore, playerCamera }) {
  socket = io(
    // @ts-ignore
    `${import.meta.env.VITE_SERVER_WS}/room-${roomId}`,
    CONNECTION_OPTIONS
  );

  // Получение ID и всех подключённых пользователей.
  socket.once("connected", ({ clientId, clients }) => {
    clientIdSelf = clientId;
    // Клиент отправляет свои начальные данные для всех подключённых.
    socket.emit("connected", getClientState(playerCamera));

    clientsStore.updateClients(clients);
    socketBroadcast(playerCamera);
  });

  // Принимает первичные данные о подключении и дальнейшие обновления клиентов.
  // Сервером отправляются данные всех клиентов включая текущее соединение - сервер с тикающим
  // алгоритмом (серверный FPS) как директор комнаты рассылает обновления всем в комнате.
  // Только соединение клиента (socket) может определить, кому конкретно отправлено сообщение и
  // поэтому на сервере есть флаг .broadcast, который исключает рассылку сообщений текущему
  // соединению (клиенту).
  socket.on("update", (clients) => {
    // Необходимые накладные расходы, чтобы была возможно сделать тикающий сервер - в таком случае
    // сервер накапливает данные и отправляет накопившиеся данные 60 раз в 1 секунду,
    // альтернатива - это рассылать всем клиентам комнаты данные на каждое обновление клиента.
    // В таком случае принятие не больших накладных расходов (~170 байт) при тикающем сервер
    // считаются разумным решением.
    delete clients[clientIdSelf];
    clientsStore.updateClients(clients);
  });

  socket.on("disconnected", ({ clientId }) => {
    clientsStore.deleteClient(clientId);
  });
}

function getClientState(playerCamera) {
  const { x, y, z } = playerCamera.object3D.getWorldPosition(
    new window.THREE.Vector3()
  );
  const { _x, _y, _z } = playerCamera.object3D.rotation;

  const positionNormalize = [x.toFixed(3), y.toFixed(3), z.toFixed(3)];

  const rotationNormalize = [
    // @ts-ignore
    window.THREE.Math.radToDeg(_x).toFixed(2),
    // @ts-ignore
    window.THREE.Math.radToDeg(_y).toFixed(2),
    // @ts-ignore
    window.THREE.Math.radToDeg(_z).toFixed(2),
  ];

  return [positionNormalize, rotationNormalize];
}

function socketBroadcast(playerCamera) {
  const clientState = getClientState(playerCamera);
  const clientStateHash = JSON.stringify(clientState);

  if (previousClientStateHash !== clientStateHash) {
    socket.volatile.emit("update", clientState);
  }

  previousClientStateHash = clientStateHash;

  socketBroadcastId = setTimeout(
    socketBroadcast,
    broadcastFrequency,
    playerCamera
  );
}

export function closeGameConnection() {
  if (socket) {
    clearTimeout(socketBroadcastId);
    socket.disconnect();
    socket = undefined;
  }
}
