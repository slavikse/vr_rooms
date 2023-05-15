<template>
  <a-sky :src="`#360deg/room${VRStore.VRRoomId}.jpg`" />
</template>

<script>
import { useVRStore } from "@/stores/vr";

export default {
  data: () => ({
    VRStore: useVRStore(),
  }),
};
</script>
