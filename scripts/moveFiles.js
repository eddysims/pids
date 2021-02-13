const fs = require("fs");
const path = require('path');
const chalk = require('chalk')

async function moveFiles() {
  const filesToMove = [
    'package.json',
  ];

  filesToMove.forEach(async (file) => {
    await fs.copyFile(`${process.cwd()}/${file}`, `${process.cwd()}/dist/${file}`, (err) => {
      if (err) {
        throw new Error(err);
      }

      console.log(chalk.green(`✍(◔◡◔) - ${process.cwd()}/${file} moved to dist`))
    })
  })
}

moveFiles();
