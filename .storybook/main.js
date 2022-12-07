const path = require("path");
const fs = require("fs");

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
  },
  framework: "@storybook/vue3",
  stories: getStories(),
  addons: [],
  viteFinal: (config) => {
    return config;
  },
};
