import { registerComponent } from "aframe";

let raycaster;

function intersected(e) {
  raycaster = e.detail.el;
}

function intersectedCleared() {
  raycaster = undefined;
}

registerComponent("raycaster-listen", {
  init() {
    this.el.addEventListener("raycaster-intersected", intersected);
    this.el.addEventListener(
      "raycaster-intersected-cleared",
      intersectedCleared
    );

    // todo
    // this.tick = utils.throttleTick(this.tick, DISTANCE_RATE, this);
  },

  tick() {
    if (!raycaster) {
      return;
    }

    const intersection = raycaster.components.raycaster.getIntersection(
      this.el
    );

    if (!intersection) {
      return;
    }

    // todo работает только для курсора, пригодится для активации?
    console.log("intersection", intersection);
  },

  remove() {
    this.el.removeEventListener("raycaster-intersected", intersected);
    this.el.removeEventListener(
      "raycaster-intersected-cleared",
      intersectedCleared
    );
  },
});
