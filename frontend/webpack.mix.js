const mix = require('laravel-mix');
const CompressionPlugin = require('compression-webpack-plugin');
require('laravel-mix-clean');


mix.setPublicPath('../home/static/member_portal/horizon');
mix.webpackConfig({
  plugins: [new CompressionPlugin()],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
    ]
  }
});

mix
  .js('./app/main.js', 'javascripts/main.js')
  .less('./app/main.less', 'styles/main.css')
  .less('./app/vendor.less', 'styles/vendor.css')
  .extract()
  .clean()
  .browserSync({
    proxy: 'localhost:8000',
    open: false
  });
