export function managerEntries(entry = []) {
  return [
    ...entry,
    require.resolve("@luniand-ui/storybook-addon/preset/register"),
  ];
}

export function webpackFinal(config: any) {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  return config;
}
