buster.testCase("Example Test", function(run) {
  require([], function() {
    run({
      "must pass": function(done) {
        assert(true);
        done();
      },
      "don't pass": function(done) {
        assert(false);
        done();
      }
    });
  });
});
