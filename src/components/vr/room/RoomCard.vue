<template>
  <!-- todo когда будет размещение карточек, то удалить компонент look-at -->
  <a-entity
    :ref="`RoomCard_${vrRoom.id}`"
    :position="vrRoom.position"
    look-at
    cursor-over-object
    class="RoomCard a-ray-catcher"
    @click="VRStore.setVRRoom(vrRoom.id)"
  >
    <a-image :src="roomImage" position="0 0 1" height="4" width="6">
      <a-text
        :value="`Online: ${lobby.clientsCount}`"
        position="-0.7 1 0.2"
        scale="1.5 1.5 1.5"
        color="red"
      />

      <a-text
        :value="vrRoom.name"
        position="-0.7 -0.5 0.2"
        scale="1.5 1.5 1.5"
        color="white"
      />
    </a-image>
  </a-entity>
</template>

<script>
import { useVRStore } from "@/stores/vr";

export default {
  props: {
    vrRoom: {
      type: Object,
      default: () => ({}),
    },

    lobby: {
      type: Object,
      default: () => ({ clientsCount: 0 }),
    },
  },

  data: () => ({
    VRStore: useVRStore(),
  }),

  computed: {
    roomImage() {
      return `#textures/rooms/room${this.vrRoom.id}.png`;
    },
  },
};
</script>
