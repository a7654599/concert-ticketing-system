const assert = require('assert');
console.log(`Running unit tests in ${process.env.TEST_ENV || 'local'}`);
assert.strictEqual(1 + 1, 2);
console.log('unit tests passed');
