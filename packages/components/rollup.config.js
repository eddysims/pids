import multiInput from "rollup-plugin-multi-input";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import postCssPresetEnv from "postcss-preset-env";

export default {
  input: `src/**/*/index.ts`,
  plugins: [
    multiInput(),
    typescript({ declarationDir: "dist" }),
    postcss({
      modules: {
        generateScopedName: "[hash:base64]",
        globalModulePaths: [/node_modules/],
      },
      minimize: true,
      plugins: [
        postCssPresetEnv({
          autoprefixer: true,
          stage: 1,
          browsers: "last 2 versions",
          preserve: true,
          importFrom: [],
        }),
      ],
    }),
  ],
  output: [
    {
      dir: "dist",
      format: "cjs",
    },
  ],
  external: ["react", "classnames"],
};
