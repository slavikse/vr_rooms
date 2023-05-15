<template>
  <a-assets
    id="AssetsModels"
    :key="VRStore.VRRoomId"
    timeout="10000"
    @loaded="loaded"
  >
    <template v-for="{ obj, mtl } of loads[VRStore.VRRoomId].obj" :key="obj">
      <a-asset-item :id="obj" :src="`/${obj}`" />
      <a-asset-item v-if="mtl" :id="mtl" :src="`/${mtl}`" />
    </template>

    <!-- gltf - ошибка материала, либо что то не поддерживается -->
    <a-asset-item
      v-for="path of loads[VRStore.VRRoomId].gltf"
      :id="path"
      :key="path"
      :src="`/${path}`"
    />
  </a-assets>
</template>

<script>
// https://free3d.com/3d-models/lowpoly-obj
// https://sketchfab.com/search?features=downloadable&q=low+polygon&type=models
// https://turbosquid.com/Search/3D-Models/free/obj

import { useVRStore } from "@/stores/vr";
import { useAssetsStore } from "@/stores/assets";

export default {
  data: () => ({
    VRStore: useVRStore(),
    assetsStore: useAssetsStore(),

    /* examples:
      <a-entity obj-model="obj: #models/shotgun/M1887.obj; mtl: #models/shotgun/M1887.mtl" />
      <a-gltf-model src="#models/cat/scene.gltf" />
    */

    // Важен порядок следования файлов для [obj], сначала .obj, потом .mtl
    loads: {
      "-1": {},
      0: {
        // obj: [{ obj: "", mtl: "" }],
        // gltf: [],
      },
      1: {
        obj: [
          {
            obj: "models/shotgun/M1887.obj",
            mtl: "models/shotgun/M1887.mtl",
          },
          {
            obj: "models/adam/Adam.obj",
            mtl: "",
          },
          {
            obj: "models/sumatran-tiger/tigre_sumatra_sketchfab.obj",
            mtl: "models/sumatran-tiger/tigre_sumatra_sketchfab.mtl",
          },
          {
            obj: "models/spider/Only_Spider_with_Animations_Export.obj",
            mtl: "models/spider/Only_Spider_with_Animations_Export.mtl",
          },
          {
            obj: "models/sword/Sting-Sword-lowpoly.obj",
            mtl: "",
          },
          {
            obj: "models/rug/10417_Rectangular_rug_v1_iterations-2.obj",
            mtl: "models/rug/10417_Rectangular_rug_v1_iterations-2.mtl",
          },
        ],
      },
      2: {
        obj: [
          {
            obj: "models/sword/Sting-Sword-lowpoly.obj",
            mtl: "",
          },
          {
            obj: "models/rug/10417_Rectangular_rug_v1_iterations-2.obj",
            mtl: "models/rug/10417_Rectangular_rug_v1_iterations-2.mtl",
          },
        ],
      },
      3: {
        obj: [
          {
            obj: "models/shotgun/M1887.obj",
            mtl: "models/shotgun/M1887.mtl",
          },
          {
            obj: "models/adam/Adam.obj",
            mtl: "",
          },
          {
            obj: "models/sumatran-tiger/tigre_sumatra_sketchfab.obj",
            mtl: "models/sumatran-tiger/tigre_sumatra_sketchfab.mtl",
          },
          {
            obj: "models/spider/Only_Spider_with_Animations_Export.obj",
            mtl: "models/spider/Only_Spider_with_Animations_Export.mtl",
          },
        ],
        gltf: [
          "models/hip_hop_dancer/scene.gltf",
          "models/dog-gltf/scene.gltf",
        ],
      },
    },
  }),

  methods: {
    loaded() {
      this.assetsStore.loaded("models");
    },
  },
};
</script>
