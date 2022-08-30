const { defineConfig } = require("@vue/cli-service");
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/scss" as *;`,
      },
    },
  },
});
