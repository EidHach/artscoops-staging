const { defineConfig } = require('@vue/cli-service');
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/global.scss";`,
      },
    },
  },
});
