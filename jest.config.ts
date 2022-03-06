import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    verbose: true,
    rootDir: './src',
    moduleDirectories: ['node_modules'],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};

export default jestConfig;
