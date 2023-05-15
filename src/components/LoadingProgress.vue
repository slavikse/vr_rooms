<template>
  <div
    v-if="!assetsStore.isAssetsLoaded && !isTransitionEnd"
    ref="progressBar"
    class="LoadingProgress"
  >
    <div class="percentage">{{ percentage }}%</div>
  </div>
</template>

<script>
export default {
  props: {
    assetsStore: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      isTransitionEnd: false,
    };
  },

  computed: {
    progressBar() {
      return `translateX(${this.percentage - 100}%)`;
    },

    percentage() {
      return Math.round(this.assetsStore.loadingPercentage * 100);
    },
  },

  mounted() {
    this.$refs.progressBar.addEventListener(
      "transitionend",
      this.transitionEnd
    );
  },

  unmounted() {
    this.$refs.progressBar?.removeEventListener(
      "transitionend",
      this.transitionEnd
    );
  },

  methods: {
    transitionEnd() {
      this.isTransitionEnd = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.LoadingProgress {
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  left: 0;
  height: 8px;
  background-color: var(--white);
  transform: v-bind(progressBar);
  transition: transform 0.1s;
  animation: global-showing 0.2s both;

  .percentage {
    margin: -18px 4px 0 0;
    text-align: right;
    line-height: 1;
    font-weight: bold;
    font-size: 20px;
    color: var(--white);
  }
}
</style>
