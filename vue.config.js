const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  publicPath: '',
  "pluginOptions": {
    "cordovaPath": "src-cordova"
  },
  // "transpileDependencies": [
  //   "vuetify"
  // ],
  publicPath: process.env.NODE_ENV === 'production' ?
      '/buffalo_cer_typescript/' :
      '/'
}