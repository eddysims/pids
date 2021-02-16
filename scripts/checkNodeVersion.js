/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require("chalk");
const semver = require("semver");
const { engines } = require("../package");

const version = engines.node;

if (!semver.satisfies(process.version, version)) {
  console.log(
    chalk.red(
      `The current node version ${process.version} does not satisfy the required version ${version}`
    )
  );
  process.exit(1);
} else {
  console.log(chalk.green("The current node version is up to date"));
}
