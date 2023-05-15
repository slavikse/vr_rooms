<template>
  <ExitRoom />
  <PlayerPosition position="0.5 1 -2.5" />

  <InterestPoint position="4 1 -4.4" />
  <InterestPoint position="1.2 1 -4.4" />
  <InterestPoint position="-1 1 -4.4" />
  <InterestPoint position="-3.8 1 -4.4" />
  <InterestPoint position="-7 1 -4.4" />
  <InterestPoint position="4 1 -2" />

  <!-- Walls -->

  <Wall
    texture="floor.jpg"
    position="0 0 -4"
    rotation="-90 0 0"
    width="20"
    height="7"
    repeat="10 7"
    impassable-point="false"
  />

  <Wall
    texture="wall.jpg"
    position="10 1.5 -4"
    rotation="0 -90 0"
    width="7"
    height="3"
    repeat="4 3"
  />

  <Wall
    texture="wall.jpg"
    position="0 1.5 -0.5"
    rotation="0 180 0"
    width="20"
    height="3"
    repeat="6 3"
  />

  <Wall
    texture="wall.jpg"
    position="-10 1.5 -4"
    rotation="0 90 0"
    width="7"
    height="3"
    repeat="4 3"
  />

  <Wall
    texture="wall.jpg"
    position="0 1.5 -7.5"
    rotation="0 0 0"
    width="20"
    height="3"
    repeat="5 3"
  />

  <!-- Models -->

  <ModelObj
    obj="shotgun/M1887.obj"
    mtl="shotgun/M1887.mtl"
    position="-1 -0.2 -6"
    scale="4 4 4"
  />

  <ModelObj obj="adam/Adam.obj" position="8 0 -4" />

  <ModelObj
    obj="sumatran-tiger/tigre_sumatra_sketchfab.obj"
    mtl="sumatran-tiger/tigre_sumatra_sketchfab.mtl"
    position="1.25 0.4 -6"
  />

  <ModelObj
    obj="sword/Sting-Sword-lowpoly.obj"
    position="-7.2 2.3 -6.6"
    rotation="-60 -20 50"
    scale="0.1 0.1 0.1"
    turning="false"
  />

  <ModelObj
    obj="rug/10417_Rectangular_rug_v1_iterations-2.obj"
    mtl="rug/10417_Rectangular_rug_v1_iterations-2.mtl"
    position="-3.8 1.5 -7.4"
    scale="0.02 0.02 0.02"
    turning="false"
  />

  <ModelObj
    obj="spider/Only_Spider_with_Animations_Export.obj"
    mtl="spider/Only_Spider_with_Animations_Export.mtl"
    position="4 0 -6.2"
    scale="0.01 0.01 0.01"
  />
</template>

<script>
export default {
  mounted() {
    document.title = "Room 1 · VR Rooms";
  },
};
</script>
