const path = require('path');
const mix = require('laravel-mix');
require('laravel-mix-clean');


const baseDir = '../home/static/member_portal/horizon';

mix
  .js('./app/main.js', path.resolve(__dirname, `${baseDir}/javascripts/main.js`))
  .extract()
  .clean();
