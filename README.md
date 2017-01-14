# jest-junit-reporter
A JUnit test reporter for Jest.

## Installation
```shell
$ npm i -D jest-junit-reporter
```

## Useage
In your `package.json` file include a `"jest"` config section and specify the `"testResultsProcessor"`:
```json
{
  "jest": {
    "testResultsProcessor": "./node_modules/jest-junit-reporter"
  }
}
```

The reporter will generate a `test-results.xml` file in the project root. If you need to specify a different location(e.g., for a CI server) then set the environment variable `TEST_REPORT_PATH` to the desired location.

## LICENSE
[MIT](LICENSE)
