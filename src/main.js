import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/styles";
import { initializeVRComponents } from "./components/vr";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");

initializeVRComponents(app);

app.config.errorHandler = (err, instance, info) => {
  console.log("errorHandler", err, instance, info);
};
