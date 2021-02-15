import multiInput from "rollup-plugin-multi-input";
import typescript from 'rollup-plugin-typescript2'

export default {
  input: `src/**/*/index.ts`,
  plugins: [multiInput(), typescript({declarationDir: "dist"})],
  output: [
    {
      dir: "dist",
      format: "cjs",
    },
  ],
  external: ["react", "classnames"],
};
