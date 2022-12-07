import { app } from "@storybook/vue3";
import Luniand from "@luniand-ui/vue";

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
