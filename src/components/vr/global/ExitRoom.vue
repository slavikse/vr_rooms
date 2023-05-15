<template>
  <a-plane
    id="ExitRoom"
    cursor-over-object
    :position="position"
    rotation="90 0 0"
    width="20"
    height="15"
    material="opacity: 0.8; transparent: true"
    color="#011746"
    class="a-ray-catcher"
    @click="VRStore.setVRRoom(0)"
  >
    <a-text
      ref="text"
      value="LOBBY"
      position="-3.5 0 0"
      scale="10 10 10"
      color="white"
    />
  </a-plane>
</template>

<script>
import { usePlayerStore } from "@/stores/player";
import { useVRStore } from "@/stores/vr";

export default {
  props: {
    position: {
      type: String,
      default: "0 20 0",
    },
  },

  data: () => ({
    playerStore: usePlayerStore(),
    VRStore: useVRStore(),
    textScale: "10 10 10",
  }),

  mounted() {
    this.setTextScale();
  },

  methods: {
    // Исправление бага a-frame:cursor v1.3.0 в сборке.
    // Появляется при повторном входе в комнату в сборке.
    setTextScale() {
      this.$refs.text.setAttribute("scale", this.textScale);
    },
  },
};
</script>
