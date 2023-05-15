<template>
  <a-scene
    id="AppView"
    vr-mode-ui="enterVRButton: .enter-vr-button"
    loading-screen="dotsColor: white; backgroundColor: #011746"
    background="color: #011746"
    stats="false"
    oncontextmenu="return false"
  >
    <AssetsAudios />
    <AssetsTextures />
    <AssetsModels />

    <WelcomeView
      v-if="VRStore.VRRoomId === -1"
      :vr-store="VRStore"
      :assets-store="assetsStore"
    />

    <template v-if="assetsStore.isAssetsLoaded">
      <LobbyView v-if="VRStore.VRRoomId === 0" />
      <GameView v-else-if="VRStore.VRRoomId > 0" />
    </template>

    <!-- todo отобразить текст LOADING... при загрузках -->
    <!-- v-if="VRStore.isVRMode" -->
  </a-scene>

  <LoadingProgress v-if="!VRStore.isVRMode" :assets-store="assetsStore" />
</template>

<script>
import "aframe";
import "aframe-extras/dist/aframe-extras.controls";
import "aframe-extras/dist/aframe-extras.misc";
// С этим моделька анимируется и чёрная, без этого моделька с текстуркой.
import "aframe-extras/dist/aframe-extras.loaders";

import AssetsAudios from "@/components/vr/assets/AssetsAudios.vue";
import AssetsTextures from "@/components/vr/assets/AssetsTextures.vue";
import AssetsModels from "@/components/vr/assets/AssetsModels.vue";

import WelcomeView from "@/views/vr/WelcomeView.vue";
import LobbyView from "@/views/vr/LobbyView.vue";
import GameView from "@/views/vr/GameView.vue";

import LoadingProgress from "@/components/LoadingProgress.vue";

import { useVRStore } from "@/stores/vr";
import { useAssetsStore } from "@/stores/assets";

export default {
  components: {
    AssetsAudios,
    AssetsTextures,
    AssetsModels,

    WelcomeView,
    LobbyView,
    GameView,

    LoadingProgress,
  },

  data: () => ({
    VRStore: useVRStore(),
    assetsStore: useAssetsStore(),
  }),

  watch: {
    "VRStore.VRRoomId"() {
      this.assetsStore.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
#AppView {
  height: 100vh;
}
</style>
