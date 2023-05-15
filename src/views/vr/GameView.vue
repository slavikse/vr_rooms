<template>
  <Clients />
  <Player env="game" />

  <RoomLight />
  <RoomSky />

  <AsyncRoomComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

import { useVRStore } from "@/stores/vr";
import { Clients, Player, RoomLight, RoomSky } from "@/components/vr";

export default {
  components: {
    Clients,
    Player,
    RoomLight,
    RoomSky,

    AsyncRoomComponent: defineAsyncComponent(() =>
      import(`../../components/vr/rooms/Room${Number.VRRoomId}.vue`)
    ),
  },

  data: () => ({
    VRStore: useVRStore(),
  }),

  unmounted() {
    // Сбрасывает компонент в 0 (Number.VRRoomId) - стартовый экран входа.
    this.$options.components.AsyncRoomComponent = defineAsyncComponent(() =>
      import(`../../components/vr/rooms/Room${Number.VRRoomId}.vue`)
    );
  },
};
</script>
