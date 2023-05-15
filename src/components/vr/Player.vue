<template>
  <!-- todo raycaster ругается - элементы не были изначально в DOM. заменить vif на vshow? -->
  <!-- raycaster="objects: .a-ray-catcher" -->
  <a-entity
    id="PlayerCamera"
    ref="PlayerCamera"
    :look-controls="`pointerLockEnabled: ${isProd}`"
    :checkpoint-controls="`mode: ${
      VRStore.isVRMode ? 'teleport' : 'animate'
    }; animateSpeed: ${animateSpeed}`"
    :position="playerStore.defaultPosition"
    camera="active: true; spectator: false"
    movement-controls="controls: checkpoint"
    wasd-controls="enabled: true"
  >
    <a-cursor
      id="PlayerCursor"
      ref="PlayerCursor"
      :position="cursorPosition"
      scale="0.05 0.05 0.05"
      cursor="fuse: true; fuseTimeout: 1000"
      animation__fusing="
        property: scale;
        startEvents: fusing;
        easing: easeInCubic;
        dur: 1000;
        from: 0.05 0.05 0.05;
        to: 0.1 0.1 0.1"
      animation__click="
        property: scale;
        startEvents: click;
        easing: easeInCubic;
        dur: 500;
        from: 0.1 0.1 0.1;
        to: 0.05 0.05 0.05;"
      animation__mouseleave="
        property: scale;
        startEvents: mouseleave;
        easing: easeInCubic;
        dur: 100;
        to: 0.05 0.05 0.05;"
      geometry="primitive: ring; radiusInner: 0.1; radiusOuter: 0.3"
      material="color: #011746; shader: flat"
    />
  </a-entity>
</template>

<script>
import { useVRStore } from "@/stores/vr";
import { usePlayerStore } from "@/stores/player";
import { useClientsStore } from "@/stores/clients";

import {
  lobbyConnection,
  closeLobbyConnection,
  gameConnection,
  closeGameConnection,
} from "@/components/network";

export default {
  props: {
    env: {
      type: String,
      default: "lobby", // lobby | game
    },
  },

  data: () => ({
    isProd: import.meta.env.PROD,

    VRStore: useVRStore(),
    playerStore: usePlayerStore(),
    clientsStore: useClientsStore(),

    animateSpeed: 5,
    cursorPosition: "0 0 -1",
  }),

  watch: {
    // Лобби:
    // env = lobby , VRRoomId = 0

    // Вход в комнату:
    // env = lobby , VRRoomId > 0
    // env = game  , VRRoomId > 0

    // Выход из комнаты в лобби:
    // env = game  , VRRoomId = 0
    // env = lobby , VRRoomId = 0
    "VRStore.VRRoomId": {
      immediate: true,
      handler() {
        if (this.env === "lobby" && this.VRStore.VRRoomId === 0) {
          this.lobbyInit();
        } else if (this.env === "game" && this.VRStore.VRRoomId > 0) {
          this.gameInit();
        }
      },
    },
  },

  unmounted() {
    closeGameConnection();
    closeLobbyConnection(this.playerStore);
  },

  methods: {
    lobbyInit() {
      closeGameConnection();
      lobbyConnection(this.playerStore, this.clientsStore);
    },

    gameInit() {
      closeLobbyConnection(this.playerStore);

      this.$nextTick(() => {
        gameConnection({
          roomId: this.VRStore.VRRoomId,
          clientsStore: this.clientsStore,
          playerCamera: this.$refs.PlayerCamera,
        });

        this.setCursorPosition();
      });
    },

    // Исправление бага a-frame:cursor v1.3.0 в сборке.
    setCursorPosition() {
      this.$refs.PlayerCursor.setAttribute("position", this.cursorPosition);
    },
  },
};
</script>
