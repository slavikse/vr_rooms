import { defineStore } from "pinia";

export const useAssetsStore = defineStore("assets", {
  state: () => ({
    audios: false,
    models: false,
    textures: false,

    loadingPercentage: 0,
  }),

  actions: {
    // type: audios | models (2) | textures
    loaded(type) {
      if (!this[type]) {
        this[type] = true;
        this.loadingPercentage += 1 / 3;
      }
    },
  },

  getters: {
    isAssetsLoaded: (state) => state.audios && state.models && state.textures,
  },
});
