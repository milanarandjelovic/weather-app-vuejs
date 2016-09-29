const elixir = require('laravel-elixir');
// require('laravel-elixir-vue');
require('laravel-elixir-vueify');
require('laravel-elixir-browserify-official');
require('laravel-elixir-eslint');

elixir(mix => {
  mix.sass('app.scss')
    .copy('node_modules/font-awesome/fonts/', 'public/fonts')
    .browserify('app.js')
    /**
     * The prefix ! is for excluding files.
     * Excluding file  'Laravel' is not defined  no-undef and  'Vue' is not defined  no-undef
     */
    .eslint([
      'resources/assets/js/**/*.js',
      'resources/assets/js/**/*.vue'
    ]);
});