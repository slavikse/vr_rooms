<template>
  <a-entity id="PlayerPosition" />
</template>

<script>
import { usePlayerStore } from "@/stores/player";

export default {
  props: {
    position: {
      type: String,
      default: "0 1 0",
      required: true,
    },
  },

  data: () => ({
    playerStore: usePlayerStore(),
  }),

  // todo
  watch: {
    position() {
      this.playerStore.setDefaultPosition(this.position);
    },
  },

  mounted() {
    this.playerStore.setDefaultPosition(this.position);
  },
};
</script>
