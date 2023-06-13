#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_1 = require("./generator");
const program = new commander_1.Command();
program.version('1.0.9').description('Generate an MVC project using Node and Express');
program
    .argument('[folder]', 'Project folder path')
    .option('-h, --help', 'Display help')
    .option('--tsc', 'Generate with TypeScript')
    .parse(process.argv);
if (program.help) {
    program.help();
}
else {
    const projectFolder = program.args[0] || process.cwd();
    console.log("generating project");
    console.log("------------------");
    const options = program.opts();
    const useTypeScript = (options.tsc === true);
    console.log((useTypeScript) ? "--with TypeScript" : "--no TypeScript");
    (0, generator_1.generate)((projectFolder == program.args[0]) ? projectFolder : "", useTypeScript);
}
//# sourceMappingURL=cli.js.map