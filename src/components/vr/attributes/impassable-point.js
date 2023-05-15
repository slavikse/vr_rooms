import { registerComponent, utils, THREE } from "aframe";
// @ts-ignore
import { usePlayerStore } from "@/stores/player";

const CALC_DISTANCE_RATE = 1000 / 10;
const playerStore = usePlayerStore();

let $playerCamera;

registerComponent("impassable-point", {
  schema: {
    minimalDistance: { default: 1 },
  },

  init() {
    $playerCamera = document.querySelector("#PlayerCamera");
    this.tick = utils.throttleTick(this.tick, CALC_DISTANCE_RATE, this);
  },

  tick() {
    const distance = $playerCamera.object3D.position.distanceTo(
      this.el.object3D.getWorldPosition(new THREE.Vector3())
    );

    if (distance < this.data.minimalDistance) {
      $playerCamera.setAttribute("position", playerStore.defaultPosition);
    }
  },
});
