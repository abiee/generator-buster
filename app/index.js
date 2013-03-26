var generator = require('yeoman-generator');
var util      = require('util');
var path      = require('path');

var Generator = module.exports = function Generator() {
  generator.Base.apply(this, arguments);
};

util.inherits(Generator, generator.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copy configuration files
  this.directory('.', 'test', true);

  // Disclaimer
  console.log([
    'If you have not already, install "grunt-buster" plugin for grunt:',
    '  npm install --save grunt-buster',
    'Also you need install buster and phantom as global',
    '  npm install -g buster phantom',
    'BusterJS works fine with node ' + '0.9.9'.yellow + ' if you have a different version may be this does\'t work.'
  ].join('\n'))
}
