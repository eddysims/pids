exports.onCreateWebpackConfig = ({
  stage,
  rules,
  actions,
  loaders,
  getConfig,
}) => {
  const config = getConfig();

  const cssRule = {
    ...rules.cssModules(),
    test: rules.css().test,
    include: /^((?!node_modules).)*$/,
  };

  const libCssRule = {
    ...rules.css(),
    test: rules.css().test,
    include: /node_modules/,
  };

  config.module.rules = [
    ...config.module.rules.filter((rule) => {
      const cssRules =
        rule.oneOf && rule.oneOf.some((r) => r.test.test("style.css"));
      return !cssRules;
    }),
    libCssRule,
    cssRule,
  ];

  if (stage.includes("html")) {
    config.module.rules.push({
      test: /(?:packages|docs)\/.*\.(?:js|jsx|ts|tsx)$/,
      use: loaders.null(),
    });
  }

  actions.replaceWebpackConfig(config);
};
