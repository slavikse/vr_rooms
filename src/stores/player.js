import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    latency: -1,
    defaultPosition: "0 1 0",
  }),

  actions: {
    setDefaultPosition(position) {
      this.defaultPosition = position;
    },
  },
});
