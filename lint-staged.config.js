module.exports = {
  "*.{js,jsx,ts,tsx}": ["yarn lint", "jest --bail --findRelatedTests"],
  "*.{md,mdx}": ["yarn lint:md"],
};
