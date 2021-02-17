import css from "rollup-plugin-css-only";
import fs from "fs";

export default {
  input: "buildStyles.js",
  dest: "bundle.js",
  plugins: [
    css({
      output: function (styles, nodes) {
        var dir = "./dist";

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        /**
         * Leaving this in as we may want to export all of the separate css
         * files at some point in the future.
         */
        // Object.entries(nodes).forEach((node, index) => {
        //   const fileName = node[0].substring(node[0].lastIndexOf("/") + 1);
        //   fs.writeFileSync(`${dir}/${fileName}`, node[1]);
        // });

        fs.writeFileSync(`${dir}/styles.css`, styles);
      },
    }),
  ],
};
