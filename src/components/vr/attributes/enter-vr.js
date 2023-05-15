import { registerComponent } from "aframe";

registerComponent("enter-vr", {
  init() {
    const sceneEl = document.querySelector("a-scene");
    // @ts-ignore
    sceneEl.enterVRBound();
  },
});
