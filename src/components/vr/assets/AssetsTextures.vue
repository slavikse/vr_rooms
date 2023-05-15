<template>
  <a-assets
    id="AssetsTextures"
    :key="VRStore.VRRoomId"
    timeout="10000"
    @loaded="loaded"
  >
    <img
      v-for="path of loads[VRStore.VRRoomId]"
      :id="path"
      :key="path"
      :src="`/${path}`"
    />
  </a-assets>
</template>

<script>
// https://flickr.com/search/?text=360%20vr

import { useVRStore } from "@/stores/vr";
import { useAssetsStore } from "@/stores/assets";

export default {
  data: () => ({
    VRStore: useVRStore(),
    assetsStore: useAssetsStore(),

    /* examples:
      <a-box src="#textures/rooms/room1.png" />
    */

    loads: {
      "-1": [],
      0: [
        "360deg/room0.jpg",
        "textures/rooms/room1.png",
        "textures/rooms/room2.png",
        "textures/rooms/room3.png",
      ],
      1: ["360deg/room1.jpg", "textures/floor.jpg", "textures/wall.jpg"],
      2: ["360deg/room2.jpg", "textures/floor.jpg", "textures/wall.jpg"],
      3: ["360deg/room3.jpg", "textures/floor.jpg"],
    },
  }),

  methods: {
    loaded() {
      this.assetsStore.loaded("textures");
    },
  },
};
</script>
