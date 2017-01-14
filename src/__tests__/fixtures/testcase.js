module.exports = {
  failedCase: {
    title: 'should foo the bar',
    status: 'failed',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: ['Assertion error']
  },
  pendingCase: {
    title: 'should foobar the baz',
    status: 'pending',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: []
  },
  passingCase: {
    title: 'should foofoo the baz',
    status: 'passed',
    ancestorTitles: ['boo', 'foo'],
    failureMessages: []
  }
};
