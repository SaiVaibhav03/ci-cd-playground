const { defineConfig } = require('jest');

module.exports = defineConfig({
	collectCoverageFrom: ['**/tests/*.test.js', '!**/node_modules/**'],
	verbose: true,
});
