const Testcase = require('./Testcase');

class Testsuite {
  constructor (id, result) {
    this.testsuite = [{
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
    }];

    this.testsuite.push({ properties: [] });
    result.testResults
      .filter(result => (result.status !== 'pending'))
      .forEach(result => this.testsuite.push(new Testcase(result)));
    this.testsuite.push({ 'system-out': {} });
    this.testsuite.push({ 'system-err': {} });
  }
}

module.exports = Testsuite;
