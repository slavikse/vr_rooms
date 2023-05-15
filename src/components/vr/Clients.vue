<template>
  <a-entity
    v-for="(client, clientId) of clients"
    :id="`Client:${clientId}`"
    :key="clientId"
    :position="client[0]"
    :rotation="client[1]"
    hide-if-player-nearby="minimalDistance: 0.8"
    class="Client"
  >
    <!-- TODO моделька головы
    <a-cone
      :rotation="client[2]"
      radius-top="0.2"
      radius-bottom="0.1"
      color="tomato"
    /> -->

    <a-entity
      obj-model="obj: #models/adam/Adam.obj"
      position="0 -1 0"
      rotation="0 180 0"
      scale="0.1 0.1 0.1"
    />
  </a-entity>
</template>

<script>
import { useClientsStore } from "@/stores/clients";

export default {
  data: () => ({
    clientsStore: useClientsStore(),
  }),

  computed: {
    clients() {
      const clients = {};

      // Position:
      // x - Negative X axis extends left. Positive X Axis extends right
      // y - Negative Y axis extends down. Positive Y Axis extends up
      // z - Negative Z axis extends in. Positive Z Axis extends out

      // Rotation:
      // x - Pitch, rotation about the X-axis
      // y - Yaw, rotation about the Y-axis
      // z - Roll, rotation about the Z-axis
      Object.entries(this.clientsStore.clients).forEach(
        // { [clientId]: [ position, rotation ] }
        ([clientId, client]) => {
          const [px, py, pz] = client[0];
          const [rx, ry, rz] = client[1];

          clients[clientId] = [
            // body: [position, rotation]
            `${px}, ${py}, ${pz}`,
            `0, ${ry}, ${rz}`,
            // head: [rotation]
            `${rx}, 0, 0`,
          ];
        }
      );

      return clients;
    },
  },
};
</script>
