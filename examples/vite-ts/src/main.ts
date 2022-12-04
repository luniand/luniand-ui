import { createApp } from "vue";
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

app.provide("$hello", { a: 1 });

app.mount("#app");
