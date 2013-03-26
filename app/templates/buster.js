var config = module.exports;

config["Browser tests"] = {
    env: "browser",
    rootPath: '../',
    libs: [
      // Put your libraries here
      "app/components/requirejs/require.js",
      "test/require-config.js",
      "app/components/jquery/jquery.js",
      "app/components/underscore/underscore.js",
      "app/components/backbone/backbone.js"
    ],
    resources: [
      // Your code comes here
      "app/scripts/**/*.js"
    ],
    tests: [
      // All your tests here
      "test/*-test.js"
    ]
};
