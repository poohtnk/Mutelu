const nextJest = require('next/jest')
const createJestConfig = nextJest({
    dir: './',
})
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: ['json-summary', 'text', 'lcov'],
    coverageDirectory: '.github/badges',
}

module.exports = createJestConfig(customJestConfig)
