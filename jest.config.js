module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],
  moduleNameMapper: {
    '^uuid$': '<rootDir>/node_modules/uuid',
    '^nanoid$': '<rootDir>/node_modules/nanoid',
  },
};
