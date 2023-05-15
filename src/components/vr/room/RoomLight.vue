<template>
  <a-light type="ambient" intensity="0.8" />
  <a-light :position="defaultPosition" target="#PlayerCamera" intensity="0.6" />
</template>

<script>
import { usePlayerStore } from "@/stores/player";

const Y = 20;

export default {
  data: () => ({
    playerStore: usePlayerStore(),
  }),

  computed: {
    defaultPosition() {
      const [x, , z] = this.playerStore.defaultPosition;
      return `${x} ${Y} ${z}`;
    },
  },
};
</script>
