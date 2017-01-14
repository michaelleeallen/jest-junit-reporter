const Testsuites = require('./src/Testsuites');
const xml = require('xml');
const fs = require('fs');
const out = process.env.TEST_REPORT_PATH || process.cwd();

module.exports = (results) => {
  const testSuites = new Testsuites(results);
  const data = xml(testSuites, { declaration: true, indent: '  ' });
  fs.writeFileSync(`${out}/test-report.xml`, data);
};
