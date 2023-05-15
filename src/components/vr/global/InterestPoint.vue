<template>
  <a-entity
    v-if="isDev || isMobile"
    id="InterestPoint"
    :position="position"
    checkpoint
    cursor-over-object
    hide-if-player-nearby="minimalDistance: 1"
    class="InterestPoint a-ray-catcher"
  >
    <a-cone
      position="0 -0.7 0"
      material="opacity: 0.5; transparent: true"
      radius-bottom="0.6"
      radius-top="0"
      height="0.6"
      color="green"
    />
  </a-entity>
</template>

<script>
import { utils } from "aframe";

export default {
  props: {
    position: {
      type: String,
      default: "0 1 0",
      required: true,
    },
  },

  data: () => ({
    isDev: import.meta.env.DEV,
    isMobile: utils.device.isMobile(),
  }),
};
</script>
