<template>
  <a-entity :id="obj" :position="position" turning>
    <a-entity :obj-model="objModel" :rotation="rotation" :scale="scale" />
  </a-entity>
</template>

<script>
export default {
  props: {
    obj: {
      type: String,
      default: "",
      required: true,
      validator: (value) => /.obj$/.test(value),
    },

    mtl: {
      type: String,
      default: "",
      validator: (value) => value.length === 0 || /.mtl$/.test(value),
    },

    position: {
      type: String,
      default: "0 0 0",
    },

    rotation: {
      type: String,
      default: "0 0 0",
    },

    scale: {
      type: String,
      default: "1 1 1",
    },

    turning: {
      type: String,
      default: "true",
      validator: (value) => /(false|true)$/.test(value),
    },
  },

  computed: {
    objModel() {
      return this.obj.length > 0 && this.mtl.length > 0
        ? `obj: #models/${this.obj}; mtl: #models/${this.mtl}`
        : `obj: #models/${this.obj}`;
    },
  },

  mounted() {
    if (this.turning === "false") {
      this.$el.removeAttribute("turning");
    }
  },
};
</script>
