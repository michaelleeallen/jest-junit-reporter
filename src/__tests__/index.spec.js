const fs = require('fs');
const xsd = require('libxml-xsd');
const cwd = process.cwd();
const reporter = require('../../index');
const { failedCase, pendingCase, passingCase } = require('./fixtures/testcase');
const junitXsd = fs.readFileSync(`${__dirname}/fixtures/junit.xsd`, {encoding: 'utf-8'});
const mock = {
  "success": true,
  "startTime": Date.now(),
  "numTotalTestSuites": 1,
  "numPassedTestSuites": 0,
  "numFailedTestSuites": 1,
  "numRuntimeErrorTestSuites": 0,
  "numTotalTests": 3,
  "numPassedTests": 1,
  "numFailedTests": 1,
  "numPendingTests": 1,
  "testResults": [
    {
      "numFailingTests": 1,
      "numPendingTests": 1,
      "numPassingTests": 1,
      "testResults": [failedCase, pendingCase, passingCase],
      "perfStats": {
        "start": Date.now(),
        "end": Date.now() + 5000
      },
      "testFilePath": "src/__tests__/index.spec.js"
    }
  ]
};

it('should produce a valid JUnit XML report', () => {
  reporter(mock);
  const report = fs.readFileSync(`${cwd}/test-report.xml`, { encoding: 'utf-8' });
  const schema = xsd.parse(junitXsd);
  const errors = schema.validate(report);
  expect(errors).toBeNull();
});

it('should return given test results', () => {
  const returnedResults = reporter(mock);
  expect(returnedResults).toEqual(mock);
});

