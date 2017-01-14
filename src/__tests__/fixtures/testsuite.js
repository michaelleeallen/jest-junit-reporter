const { failedCase, pendingCase, passingCase } = require('./testcase');
const mockStart = 1484076068090;

const mockTestsuite = {
  testFilePath: 'src/foo.js',
  numFailingTests: 1,
  numPendingTests: 1,
  numPassingTests: 1,
  perfStats: {
    start: mockStart,
    end: mockStart + 5000
  },
  testResults: [pendingCase, failedCase, passingCase]
};

const mockTestsuiteResult = {
  testsuite: [
    {
      _attr: {
        id: 1,
        name: mockTestsuite.testFilePath,
        errors: 0,
        package: mockTestsuite.testFilePath,
        hostname: 'localhost',
        tests: 3,
        failures: 1,
        time: 5,
        timestamp: new Date(mockStart).toISOString().slice(0, -5)
      }
    },
    { properties: [] },
    {
      testcase: [
        {
          _attr: {
            classname: failedCase.ancestorTitles.pop(),
            name: failedCase.title,
            time: 0
          }
        },
        {
          failure: [{
            _attr: {
              message: failedCase.failureMessages[0],
              type: 'AssertionError'
            }
          }]
        }
      ]
    },
    {
      testcase: [
        {
          _attr: {
            classname: passingCase.ancestorTitles.pop(),
            name: passingCase.title,
            time: 0
          }
        }
      ]
    }
  ]
};

module.exports = { mockTestsuite, mockTestsuiteResult };
