<template>
  <a-assets
    id="AssetsAudios"
    :key="VRStore.VRRoomId"
    timeout="10000"
    @loaded="loaded"
  >
    <audio
      v-for="path of loads[VRStore.VRRoomId]"
      :id="path"
      :key="path"
      :src="`/${path}`"
      :autoplay="isProd"
      loop
      volume="0.5"
    />
  </a-assets>
</template>

<script>
import { useVRStore } from "@/stores/vr";
import { useAssetsStore } from "@/stores/assets";

export default {
  data: () => ({
    VRStore: useVRStore(),
    assetsStore: useAssetsStore(),
    isProd: import.meta.env.PROD,

    /* examples:
      <a-sound src="#audios/room0.mp3" />
    */

    loads: {
      "-1": [],
      0: ["audios/room0.mp3"],
      1: ["audios/room1.mp3"],
      2: ["audios/room2.mp3"],
      3: ["audios/room3.mp3"],
    },
  }),

  methods: {
    loaded() {
      this.assetsStore.loaded("audios");
    },
  },
};
</script>
