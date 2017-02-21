const Testsuites = require('./src/Testsuites');
const xml = require('xml');
const fs = require('fs');
const path = require('path');
const out = process.env.TEST_REPORT_PATH || process.cwd();
const filename = process.env.TEST_REPORT_FILENAME || 'test-report.xml';

module.exports = (results) => {
  const testSuites = new Testsuites(results);
  const data = xml(testSuites, { declaration: true, indent: '  ' });
  fs.writeFileSync(path.join(out, filename), data);
};
