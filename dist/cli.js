#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_1 = require("./generator");
const argument_1 = require("./argument");
const program = new commander_1.Command();
program
    .version('1.0.7')
    .description('Generate an MVC project using Node and Express')
    .option('--api', 'No Views folder, creates an Express API')
    .option('--auth', 'Adds Authentication to the project')
    .option('--tsc', 'Generate with TypeScript')
    .option('-h, --help', 'Display help')
    .argument('[folder]', 'Project folder path')
    .parse(process.argv);
const options = program.opts();
if (options.help) {
    program.help();
}
else {
    const projectFolder = program.args[0] || process.cwd();
    console.log("generating project");
    console.log("------------------");
    let argument = new argument_1.Argument();
    argument.api = options.api;
    argument.tsc = options.tsc;
    console.log((argument.tsc) ? "--with TypeScript" : "--no TypeScript");
    (0, generator_1.generate)((projectFolder == program.args[0]) ? projectFolder : "", argument);
}
//# sourceMappingURL=cli.js.map