const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];
    return config;
  },
};
