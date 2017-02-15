const Failure = require('./Failure');

class Testcase {
  constructor (result) {
    let failures = result.failureMessages.map(message => new Failure(message));
    let testCase = [
      {
        _attr: {
          classname: result.ancestorTitles.pop() || result.title,
          name: result.title,
          time: 0
        }
      }
    ];

    if (result.status === 'pending') {
      testCase.push({ skipped: {} });
    }

    this.testcase = testCase.concat(failures);
  }
}

module.exports = Testcase;
