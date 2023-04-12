/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jsdom',
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'^\\$lib/(.*)$': '<rootDir>/src/lib/$1'
	},
	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		'./src/*.ts': {
			statements: 90,
			functions: 100
		}
	}
};
