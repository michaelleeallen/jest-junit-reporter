const Testsuite = require('../Testsuite');
const xml = require('xml');
const { failedCase, pendingCase, passingCase } = require('./fixtures/testcase');
const fs = require('fs');
const testsuiteFixture = fs.readFileSync(__dirname + '/fixtures/testsuite.xml', { encoding: 'utf-8' });

it('should produce a <testsuite>', () => {
  const mockStart = 1484076068090;
  const mock = {
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

  const result = new Testsuite(1, mock);
  const report = xml(result, {indent: '  '});
  expect(report).toEqual(testsuiteFixture.trim());
});
