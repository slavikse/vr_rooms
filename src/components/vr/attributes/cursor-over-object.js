import { registerComponent } from "aframe";

const COLOR_DEFAULT = "#011746";
const COLOR_HOVER = "white";

let $playerCursor;

function mouseenter() {
  $playerCursor.setAttribute("material", "color", COLOR_HOVER);
}

function mouseleave() {
  $playerCursor.setAttribute("material", "color", COLOR_DEFAULT);
}

registerComponent("cursor-over-object", {
  init() {
    $playerCursor = document.querySelector("#PlayerCursor");

    this.el.addEventListener("mouseenter", mouseenter);
    this.el.addEventListener("mouseleave", mouseleave);
  },

  remove() {
    this.el.removeEventListener("mouseenter", mouseenter);
    this.el.removeEventListener("mouseleave", mouseleave);
  },
});
