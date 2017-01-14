const Testsuite = require('./Testsuite');

class Testsuites {
  constructor (results) {
    this.testsuites = results.testResults.map((result, i) => new Testsuite(i, result));
  }
}

module.exports = Testsuites;
