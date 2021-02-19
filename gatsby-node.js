/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  actions,
  loaders,
  getConfig,
}) => {
  const config = getConfig();

  config.module.rules.push({
    enforce: "pre",
    test: /\.css$/,
    exclude: /styles/,
    use: [require.resolve("typed-css-modules-loader")],
  });

  config.module.rules.push({
    test: rules.css().test,
    include: /^((?!node_modules).)*$/,
  });

  const cssRule = {
    ...rules.cssModules(),
    test: rules.css().test,
    include: /^((?!node_modules).)*$/,
  };

  const libraryCssRule = {
    ...rules.css(),
    test: rules.css().test,
    include: /node_modules/,
  };

  config.module.rules = [
    ...config.module.rules.filter((rule) => {
      const rulesToIgnore =
        rule.oneOf && rule.oneOf.some((r) => r.test.test("style.css"));
      return !rulesToIgnore;
    }),
    libraryCssRule,
    cssRule,
  ];

  if (stage.includes("html")) {
    config.module.rules.push({
      test: /(?:packages|docs)\/.*\.(?:js|jsx|ts|tsx)$/,
      use: loaders.null(),
    });

    config.module.rules.push({
      test: /.*\.(?:md|mdx)$/,
      use: path.resolve("../scripts/nullMarkdownLoader.js"),
    });
  }

  config.resolve.alias = {
    ...config.resolve.alias,
    "@pids/styles": path.resolve(__dirname, "../packages/styles/src"),
    "@pids/components": path.resolve(__dirname, "../packages/components/src"),
  };

  actions.replaceWebpackConfig(config);
};
