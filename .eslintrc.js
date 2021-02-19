module.exports = {
  env: { browser: true, es6: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [["@pids/styles", "./packages/styles"]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
  rules: {
    "no-use-before-define": "off",
    "no-unused-vars": "error",
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: [
        "./doczrc.js",
        "**/rollup.config.js",
        "./src/gatsby-theme-docz/wrapper.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
