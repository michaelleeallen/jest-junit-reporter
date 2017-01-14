class Failure {
  constructor (message) {
    this.failure = [{
      _attr: {
        message,
        type: 'AssertionError'
      }
    }];
  }
}

module.exports = Failure;
