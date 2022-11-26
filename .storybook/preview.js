import { extendTheme } from "@luniand-ui/vue";

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  luniand: {
    theme: extendTheme({
      semanticTokens: {
        colors: {
          semantic: {
            default: "red.500",
            _light: "red.500",
            _dark: "blue.400",
          },
        },
      },
    }),
  },
};

export const decorators = [];
