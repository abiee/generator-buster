var generator = require('yeoman-generator');
var util      = require('util');
var path      = require('path');

var Generator = module.exports = function Generator() {
  generator.NamedBase.apply(this, arguments);

  // dasherize the thing
  this.filename = this._.dasherize(this.name).replace(/:/, '-');

  this.argument('testFile', {
    type: String,
    banner: 'path/to/file/to/test do not include .js'
  });
};

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createTestSuite = function createTestSuite() {
  this.template('test.js', 'test/' + this.filename + '-test.js');
};
