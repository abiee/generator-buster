require.config({
  baseUrl: 'app/scripts',
  paths: {
    "jquery": "../components/jquery/jquery",
    "underscore": "../components/underscore/underscore",
    "backbone": "../components/backbone/backbone"
  },
  shim: {
    "underscore": {
      exports: '_'
    },
    "backbone": {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
  }
});
