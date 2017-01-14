const Testcase = require('./Testcase');

class Testsuite {
  constructor (id, result) {
    let testcases = result.testResults
      .filter(result => (result.status !== 'pending'))
      .map(result => new Testcase(result));

    let suite = {
      _attr: {
        id,
        name: result.testFilePath,
        errors: 0,
        package: result.testFilePath,
        hostname: 'localhost',
        tests: (result.numPendingTests + result.numFailingTests + result.numPassingTests),
        failures: result.numFailingTests,
        time: (result.perfStats.end - result.perfStats.start) / 1000,
        timestamp: new Date(result.perfStats.start).toISOString().slice(0, -5)
      }
    };

    this.testsuite = [suite, { properties: [] }]
      .concat(
        testcases,
        { 'system-out': {} },
        { 'system-err': {} }
      );
  }
}

module.exports = Testsuite;
