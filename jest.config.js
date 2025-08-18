export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/setupTests.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
};
