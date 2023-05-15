import { registerComponent, utils } from "aframe";

const TURNING_SPEED = 0.01;
const TURNING_RATE = 1000 / 30;

registerComponent("turning", {
  init() {
    this.tick = utils.throttleTick(this.tick, TURNING_RATE, this);
  },

  tick() {
    this.el.object3D.rotation.y += TURNING_SPEED;
  },
});
