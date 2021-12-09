/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    clearMocks: true,
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover", "cobertura", "text-summary"],
    collectCoverageFrom: ["src/**/*.{ts,js,tsx,jsx}"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["tests/**/*.ts", "**/*.{spec,test}.{ts,js,tsx,jsx}", "**/__test__/*.{ts,js,tsx,jsx}"],
    testPathIgnorePatterns: ["/node_modules/"],
};
