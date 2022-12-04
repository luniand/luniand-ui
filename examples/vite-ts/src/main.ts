import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";
import Luniand, {
  extendLuniand,
  extendTheme,
} from "../../../packages/components/vue";

const app = createApp(App).use(
  Luniand,
  extendLuniand({
    cssReset: true,
    emotionCacheOptions: {
      key: "luniand",
    },
    extendTheme: extendTheme({}),
  })
);

app.mount("#app");
