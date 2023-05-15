import { registerComponent, utils } from "aframe";

const CALC_DISTANCE_RATE = 1000 / 10;

let $playerCamera;

registerComponent("hide-if-player-nearby", {
  schema: {
    minimalDistance: { default: 1 },
  },

  init() {
    $playerCamera = document.querySelector("#PlayerCamera");
    this.tick = utils.throttleTick(this.tick, CALC_DISTANCE_RATE, this);
  },

  tick() {
    const distance = $playerCamera.object3D.position.distanceTo(
      this.el.object3D.position
    );

    this.el.object3D.visible = distance > this.data.minimalDistance;
  },
});
