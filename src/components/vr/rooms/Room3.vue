<template>
  <ExitRoom />
  <PlayerPosition position="-4.3 1 0.4" />

  <InterestPoint position="6.5 0.3 -1.5" />
  <InterestPoint position="2 0.3 1.5" />
  <InterestPoint position="4 0.3 -8" />

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
    obj="shotgun/M1887.obj"
    mtl="shotgun/M1887.mtl"
    position="-1 -0.2 -6"
    scale="4 4 4"
  />

  <ModelObj obj="adam/Adam.obj" position="8 0 -4" />

  <ModelObj
    obj="sumatran-tiger/tigre_sumatra_sketchfab.obj"
    mtl="sumatran-tiger/tigre_sumatra_sketchfab.mtl"
    position="1 0.4 -6.2"
  />

  <ModelObj
    obj="spider/Only_Spider_with_Animations_Export.obj"
    mtl="spider/Only_Spider_with_Animations_Export.mtl"
    position="1 0 2"
    scale="0.01 0.01 0.01"
  />

  <!-- todo ModelGltf или подтип в ModelObj component is ? -->
  <a-entity
    gltf-model="#models/hip_hop_dancer/scene.gltf"
    animation-mixer
    position="0 0 -3"
    scale="0.5 0.5 0.5"
  />

  <!-- todo -->
  <a-entity
    gltf-model="#models/dog-gltf/scene.gltf"
    animation-mixer
    position="2 0 -3"
    scale="3 3 3"
  />
</template>

<script>
export default {
  mounted() {
    document.title = "Room 3 · VR Rooms";
  },
};
</script>
