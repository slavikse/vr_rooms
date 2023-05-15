import { defineStore } from "pinia";

// @ts-ignore
Number.VRRoomId = -1;

export const useVRStore = defineStore("vr", {
  state: () => ({
    VRRoomId: -1,
    isVRMode: false,
  }),

  actions: {
    setVRRoom(id, isVRMode = this.isVRMode) {
      // @ts-ignore
      Number.VRRoomId = id;
      this.VRRoomId = id;

      this.isVRMode = isVRMode;
    },
  },
});
