buster.testCase("Test <%= _.classify(name) %>", function(run) {
  require([<% if(!_.isEmpty(testFile)) { %>'<%= testFile %>'<% } %>], function(<% if(!_.isEmpty(testFile)) { %>Module<%}%>) {
    <% if(!_.isEmpty(testFile)) { %>run({
      "verify was loaded correctly": function(done) {
        var module = new Module();
        assert(module);
        done();
      },
      <% } %>"must pass": function(done) {
        assert(true);
        done();
      }
    });
  });
});
