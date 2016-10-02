const elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
require('laravel-elixir-browserify-official');
require('laravel-elixir-eslint');

elixir(mix => {
  mix.sass('app.scss')
    .copy('node_modules/font-awesome/fonts/', 'public/fonts')
    .browserify('app.js')
    .eslint([
      'resources/assets/js/**/*.js',
      'resources/assets/js/**/*.vue'
    ]);
});
