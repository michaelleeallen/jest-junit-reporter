const Failure = require('./Failure');

class Testcase {
  constructor (result) {
    this.testcase = [
      {
        _attr: {
          classname: result.ancestorTitles.pop(),
          name: result.title,
          time: 0
        }
      }
    ];

    if (result.failureMessages.length) {
      result.failureMessages.forEach(message => this.testcase.push(new Failure(message)));
    }
  }
}

module.exports = Testcase;
