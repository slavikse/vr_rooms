import { io } from "socket.io-client";
import { CONNECTION_OPTIONS } from "./constants";

const broadcastFrequency = 1000 / 5;

let socket;
let pingTimeStart;
let pingIntervalId;

export function lobbyConnection(playerStore, clientsStore) {
  // todo PROD socket io message Invalid namespace
  // @ts-ignore
  socket = io(`${import.meta.env.VITE_SERVER_WS}/lobby`, CONNECTION_OPTIONS);

  socket.on("update", (lobby) => {
    clientsStore.updateLobby(lobby);
  });

  socket.on("pong", () => {
    playerStore.latency = Date.now() - pingTimeStart;
  });

  pingIntervalId = setInterval(() => {
    pingTimeStart = Date.now();
    socket.emit("ping");
  }, broadcastFrequency);
}

export function closeLobbyConnection(playerStore) {
  if (socket) {
    clearInterval(pingIntervalId);
    socket.disconnect();
    socket = undefined;

    playerStore.latency = -1;
  }
}
