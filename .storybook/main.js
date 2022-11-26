const path = require("path");
const fs = require("fs");

// [Workaround] This logic means `"../packages/components/*/stories/*.stories.ts"` but it's much faster.
function getStories(pkg) {
  const scope = pkg ? [pkg] : fs.readdirSync("packages/components");
  return scope
    .map((package) => `packages/components/${package}/stories`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.ts`);
}

module.exports = {
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  stories: getStories(),
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@luniand-ui/vue": path.resolve(
        __dirname,
        "../packages/components/vue/src"
      ),
      "@luniand-ui/theme": path.resolve(
        __dirname,
        "../packages/core/theme/src"
      ),
    };
    config.resolve.extensions.push(".ts");
    return config;
  },
  typescript: {
    reactDocgen: false,
  },
};
