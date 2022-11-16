module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": [
      "esbuild-jest",
      {
        jsxFactory: "h",
        jsxFragment: "Fragment",
        sourcemap: true,
        target: "es2020",
      },
    ],
  },
  setupFiles: ["./jest.setup.ts"],
  transformIgnorePatterns: ["/node_modules/(?!@popperjs/.*|lodash.)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "@uisland-ui/vue-test-utils": "<rootDir>/packages/test-utils",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  snapshotSerializers: [
    "@uisland-ui/vue-test-utils/src/snapshot-serializer.ts",
  ],
  testMatch: ["**/**/*.test.(js|jsx|ts|tsx)"],
}
