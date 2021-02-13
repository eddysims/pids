/**
 * Disabling no-var-requires as this is a node file.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const chalk = require("chalk");

async function moveFiles() {
  const filesToMove = ["package.json"];

  filesToMove.forEach(async (file) => {
    await fs.copyFile(
      `${process.cwd()}/${file}`,
      `${process.cwd()}/dist/${file}`,
      (err) => {
        if (err) {
          throw new Error(err);
        }

        // eslint-disable-next-line no-console
        console.log(
          chalk.green(`✍(◔◡◔) - ${process.cwd()}/${file} moved to dist`)
        );
      }
    );
  });
}

moveFiles();
