<template>
  <component
    :is="doubleSide ? 'a-box' : 'a-plane'"
    :id="texture"
    :src="`#textures/${texture}`"
    :position="position"
    :rotation="rotation"
    :width="width"
    :height="height"
    :depth="depth"
    :repeat="repeat"
  >
    <a-entity v-if="!isMobile && impassablePoint === 'true'">
      <a-plane
        v-for="pointIndex of Number(width)"
        :key="pointIndex"
        :material="`opacity: ${isDev ? '0.5' : '0'}; transparent: true`"
        :position="`${pointIndex - 0.5 - Number(width) / 2} 0 0.01`"
        impassable-point
        height="0.2"
        width="0.2"
        depth="0.2"
        color="red"
      />
    </a-entity>
  </component>
</template>

<script>
import { utils } from "aframe";

export default {
  props: {
    doubleSide: {
      type: Boolean,
      default: false,
    },

    texture: {
      type: String,
      default: "",
      required: true,
      validator: (value) => /(.jpg|.jpeg|.png)$/.test(value),
    },

    position: {
      type: String,
      default: "0 0 0",
    },

    rotation: {
      type: String,
      default: "0 0 0",
    },

    width: {
      type: String,
      default: "1",
    },

    height: {
      type: String,
      default: "1",
    },

    depth: {
      type: String,
      default: "1",
    },

    repeat: {
      type: String,
      default: "1 1",
    },

    impassablePoint: {
      type: String,
      default: "true",
      validator: (value) => /(false|true)$/.test(value),
    },
  },

  data: () => ({
    isDev: import.meta.env.DEV,
    isMobile: utils.device.isMobile(),
  }),
};
</script>
