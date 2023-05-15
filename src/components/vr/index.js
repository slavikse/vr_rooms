import registerGlobalComponents from "./global";
import { RoomCard, RoomLight, RoomSky } from "./room";
import Clients from "./Clients.vue";
import Player from "./Player.vue";

function initializeVRComponents(app) {
  import("./attributes");
  registerGlobalComponents(app);
}

export {
  RoomCard,
  RoomLight,
  RoomSky,
  Clients,
  Player,
  initializeVRComponents,
};
