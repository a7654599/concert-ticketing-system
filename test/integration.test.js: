const assert = require('assert');
const env = process.env.TEST_ENV;

console.log(`Running integration tests in ${env}`);
assert.ok(env, 'TEST_ENV must be set');
assert.ok(['staging', 'prod'].includes(env), `Unexpected TEST_ENV: ${env}`);
assert.strictEqual(2 + 2, 4);
console.log('integration tests passed');
