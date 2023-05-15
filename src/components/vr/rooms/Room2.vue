<template>
  <ExitRoom />
  <PlayerPosition position="0.5 1 -2.5" />

  <InterestPoint position="0 0.3 -5" />
  <InterestPoint position="4 0.3 1" />
  <InterestPoint position="-4 0.3 4" />

  <!-- Walls -->

  <Wall
    texture="floor.jpg"
    rotation="-90 0 0"
    height="40"
    width="30"
    repeat="30 45"
    impassable-point="false"
  />

  <!-- Models -->

  <ModelObj
    obj="sword/Sting-Sword-lowpoly.obj"
    position="-2 1 -4"
    rotation="-90 10 45"
    scale="0.1 0.1 0.1"
    turning="false"
  />

  <ModelObj
    obj="rug/10417_Rectangular_rug_v1_iterations-2.obj"
    mtl="rug/10417_Rectangular_rug_v1_iterations-2.mtl"
    position="-2 0.005 -4"
    rotation="-90 0 0"
    scale="0.02 0.02 0.02"
    turning="false"
  />
</template>

<script>
export default {
  mounted() {
    document.title = "Room 2 · VR Rooms";
  },
};
</script>
