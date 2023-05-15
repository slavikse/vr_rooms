<template>
  <div v-if="clientsStore.latency !== -1" class="LatencyTime">
    {{ clientsStore.latency }}
  </div>
</template>

<script>
import { useClientsStore } from "@/stores/clients";

export default {
  data: () => ({
    clientsStore: useClientsStore(),
  }),
};
</script>

<style scoped>
.LatencyTime {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  min-width: 10px;
  padding: 1px 2px;
  text-align: center;
  font-size: 12px;
  color: white;
  background-color: darkslategray;
}
</style>
