<template>
  <!-- todo под VR
    <a-entity id="WelcomeView" position="-10 0 -10">
    <Player env="welcome" />

    <a-text value="VR-ROOMS" position="0 4 0" scale="10 10 10" color="white" />

    <a-text
      v-show="isVRAvailable"
      id="a-enter-vr-button"
      value="ENTER VR-ROOMS"
      position="0 0 0"
      scale="10 10 10"
      color="white"
      @click="vrStore.setVRRoom(0, true)"
    />
  </a-entity> -->

  <div class="WelcomeView">
    <img src="/vr_welcome.jpg" alt="vr_welcom" class="welcome-image" />
    <div class="welcome-text">VR-ROOMS</div>

    <div class="welcome-enter">
      <div v-show="!assetsStore.isAssetsLoaded" class="enter-button loading">
        LOADING...
      </div>

      <div v-show="assetsStore.isAssetsLoaded">
        <button
          v-show="isVRAvailable"
          class="enter-vr-button"
          @click="vrStore.setVRRoom(0, true)"
        >
          ENTER VR-ROOMS
        </button>

        <button class="enter-button" @click="vrStore.setVRRoom(0)">
          ENTER ROOMS
        </button>
      </div>
    </div>

    <p v-if="!isVRAvailable" class="recommended-browser">
      VR mode is available on mobile Android with Google Chrome
    </p>

    <p v-else />
  </div>
</template>

<script>
import { utils } from "aframe";

export default {
  props: {
    vrStore: {
      type: Object,
      default: () => ({}),
    },

    assetsStore: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    isVRAvailable: false,
  }),

  computed: {
    welcomeViewZIndex() {
      let zIndex = 0; // hidden
      if (this.vrStore.VRRoomId === -1) {
        zIndex = 1; // start screen
      } else if (!this.assetsStore.isAssetsLoaded) {
        zIndex = 2; // is loading
      }
      return zIndex;
    },

    loadingZIndex() {
      return this.assetsStore.isAssetsLoaded ? 0 : 1;
    },
  },

  mounted() {
    document.title = "Welcome · VR Rooms";
    this.setVRAvailable();
  },

  methods: {
    // todo пропускает моб браузеры не "чистый хром"
    setVRAvailable() {
      const ua = navigator.userAgent.toLowerCase();
      const isAndroid = ua.indexOf("android") > -1;

      const isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);

      this.isVRAvailable =
        utils.device.isWebXRAvailable &&
        utils.device.isMobile() &&
        isAndroid &&
        isChrome;
    },
  },
};
</script>

<style lang="scss" scoped>
.WelcomeView {
  position: relative;
  z-index: v-bind(welcomeViewZIndex);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 40px 0;
  user-select: none;

  @media (max-height: 1000px) {
    padding: 10px 0;
  }

  @media (max-height: 500px) {
    padding: 0 0 10px;
  }

  .welcome-image {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: v-bind(loadingZIndex);
    display: block;
    object-fit: cover;
  }

  .welcome-text {
    position: relative;
    z-index: v-bind(loadingZIndex);
    font-size: 260px;
    letter-spacing: 0.3rem;
    color: var(--white);
    transition: line-height 0.2s, font-size 0.3s, letter-spacing 0.3s;

    @media (max-width: 1500px) {
      line-height: 1.5;
      font-size: 200px;
      letter-spacing: 0.25rem;
    }

    @media (max-width: 1100px) {
      line-height: 2;
      font-size: 140px;
      letter-spacing: 0.15rem;
    }

    @media (max-width: 700px) {
      line-height: 2.5;
      font-size: 100px;
      letter-spacing: 0.1rem;
    }

    @media (max-width: 500px) {
      line-height: 4.5;
      font-size: 60px;
      letter-spacing: 0.1rem;
    }

    @media (max-height: 1000px) {
      line-height: 2.5;
      font-size: 100px;
      letter-spacing: 0.1rem;
    }

    @media (max-height: 500px) {
      line-height: 1.4;
    }
  }

  .welcome-enter {
    position: relative;
    z-index: 1;
    margin-bottom: 40px;

    @media (max-height: 1000px) {
      margin-bottom: 10px;
    }

    .enter-vr-button,
    .enter-button {
      margin: 15px 0;
      display: block;
      width: 100%;
      padding-left: 4px;
      border: 1px solid var(--white);
      text-align: center;
      font-weight: 100;
      letter-spacing: 0.2rem;
      color: var(--white);
      transition: margin-top 0.3s, font-size 0.3s, letter-spacing 0.3s,
        background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
    }

    .enter-vr-button {
      font-size: 100px;

      @media (max-width: 1500px) {
        margin-top: 40px;
        font-size: 80px;
        letter-spacing: 0.15rem;
      }

      @media (max-width: 1100px) {
        margin-top: 50px;
        font-size: 60px;
        letter-spacing: 0.1rem;
      }

      @media (max-height: 1000px) {
        margin-top: 20px;
        font-size: 60px;
        padding: 10px 0;
      }

      @media (max-height: 500px) {
        margin-top: 20px;
        font-size: 30px;
        padding: 0;
      }
    }

    .enter-button {
      margin-top: 40px;
      font-size: 80px;

      &.loading {
        border: none;

        &:hover {
          background-color: transparent;
        }
      }

      @media (max-width: 1500px) {
        margin-top: 40px;
        font-size: 60px;
        letter-spacing: 0.15rem;
      }

      @media (max-width: 1100px) {
        margin-top: 50px;
        font-size: 40px;
        letter-spacing: 0.1rem;
      }

      @media (max-height: 1000px) {
        margin-top: 20px;
        font-size: 50px;
        padding: 10px 0;
      }

      @media (max-height: 500px) {
        margin-top: 20px;
        font-size: 30px;
        padding: 0;
      }
    }
  }

  .recommended-browser {
    font-size: 20px;
    font-weight: 100;
    color: var(--white);
  }
}
</style>
