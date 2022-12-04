import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";
import Luniand, { extendLuniand } from "../../../packages/components/vue";

const app = createApp(App);
app.use(
  Luniand,
  extendLuniand({
    cssReset: true,
  })
);

app.mount("#app");
