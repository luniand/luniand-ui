import { app } from "@storybook/vue3";
import Luniand from "@luniand-ui/vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [];
app.use(Luniand);
app.use(router);
