/*global describe beforeEach it*/

var path = require('path');
var generator = require('yeoman-generator');
var util = require('util')
var helpers = require('yeoman-generator').test;
var assert  = require('assert');

describe('Busterjs generator test', function () {
  var buster;

  beforeEach(function (done) {
    var deps = [
      '../../app',
      '../../newtest'
    ];
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }
      buster = helpers.createGenerator('buster:app', deps);
      done();
    });
  });

  it('creates expected files', function(done) {
    var expected = [
     'test/buster.js',
     'test/example-test.js',
     'test/require-config.js'
    ];

    buster.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  describe('Backbone Views', function() {
    it('creates backbone view', function(done){
      var newtest;
      newtest = helpers.createGenerator('buster:newtest',['../../newtest'], ['foo', 'bar']);

      newtest.run([], function(){
        helpers.assertFiles([
          ['test/foo-test.js', /require\([\w\W\s]+bar/],
        ]);
      });
      done();
    });
  });


});
