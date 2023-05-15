<template>
  <Player env="lobby" />
  <PlayerPosition position="0 0 0" />

  <RoomSky />

  <RoomCard
    v-for="vrRoom of vrRooms"
    :key="vrRoom.id"
    :vr-room="vrRoom"
    :lobby="clientsStore.lobby[`/room-${vrRoom.id}`]"
  />

  <LatencyTime />
</template>

<script>
import { useClientsStore } from "@/stores/clients";

import { Player, RoomCard, RoomSky } from "@/components/vr";
import { LatencyTime } from "@/components/network";

// todo
import { vrRooms } from "@/API/vrRooms";

export default {
  components: {
    Player,
    RoomCard,
    RoomSky,
    LatencyTime,
  },

  data: () => ({
    clientsStore: useClientsStore(),
    vrRooms: [],
  }),

  mounted() {
    document.title = "Lobby · VR Rooms";

    // todo get api
    setTimeout(() => {
      this.vrRooms = vrRooms;
    }, 100);
  },
};
</script>
