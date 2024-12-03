module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "text"],
  collectCoverageFrom: [
    "**/*.js",        // Include all .js files in the root and subdirectories
    "!tests/**",      // Exclude all files in the tests directory
    "!*.config.js",   // Optionally exclude config files if they are in the root
    "!coverage/**"    // Exclude the coverage output directory
  ]
};
