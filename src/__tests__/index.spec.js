const fs = require('fs');
const xsd = require('libxml-xsd');
const cwd = process.cwd();
const reporter = require('../../index');
const { failedCase, pendingCase, passingCase } = require('./fixtures/testcase');
const junitXsd = fs.readFileSync(`${__dirname}/fixtures/junit.xsd`, {encoding: 'utf-8'});
const junit4Xsd = fs.readFileSync(`${__dirname}/fixtures/junit4.xsd`, {encoding: 'utf-8'});
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

const validateXml = (junitXsd, xml) => {
  const schema = xsd.parse(junitXsd);
  return schema.validate(xml);
}

it('should produce a valid JUnit XML report', () => {
  reporter(mock);
  const report = fs.readFileSync(`${cwd}/test-report.xml`, { encoding: 'utf-8' });
  const errors = validateXml(junitXsd, report);
  const errors4 = validateXml(junit4Xsd, report);
  // The XML should comply ethier JUnit XSD or JUnit4 XSD
  expect(!!errors && !!errors4).toBeFalsy();
});
