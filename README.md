Using Jest v20.0.4

### Description

We've been having issues with (what seems to be) Jest's module resolver and how it interacts with Jest's cache.

Our `.babelrc` uses the module-resolver plugin so we can use paths relative to our `src` directory (effectively the root of our project) rather than from each file. For example, `import Bar from '../../components/foo/bar'` might end up being `import Bar from 'components/foo/bar'`.

This test case is reduced to show our i18n helper that lives in `src/utils/i18n.js`. We use this in our translation JSON files to provide fallbacks for translations when a locale may be missing or a locale like Germany might provide translations for Austria and Switzerland.

When we run tests, our i18n helper runs as expected as long as it exists at what would be the same relative path. For example, in this repo, the path from `Component1/translations/index.js` to the `i18n` module would be:

`import { i18n } from '../../../utils/i18n.js';`

When we test a component that has a different relative path, the i18n module can not be found. For example, the path from `Component2/NestedComponent/translations/index.js` to the `i18n` module would be one level deeper:

`import { i18n } from '../../../../utils/i18n.js';`

This causes tests to fail.

### Reproduction

1. Clone this repo
2. run `yarn` to install dependencies. Ensure you have jest-cli installed
3. after running yarn, kick off the tests by running `jest` or `yarn test`. The first test run primes the Jest cache so tests should pass fine. Run tests again.

**Expected Behavior:**
Tests still pass. Paths resolve as they should.

**Actual Behavior:**
Tests fail. The error is as follows:
```
Cannot find module '../../../../utils/i18n' from 'index.js'
      
      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:179:17)
      at Object.<anonymous> (src/components/Component1/translations/index.js:1:229)
```

It seems that the module can't be found because the path that's four directories up is actually the path used from the NestedComponent's translation index file.

Running the tests again with either `jest --no-cache` or `yarn test:nocache` should pass.
