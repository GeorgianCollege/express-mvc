#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_1 = require("./generator");
const program = new commander_1.Command();
program.version('1.0.2').description('Generate an MVC TypeScript project');
program
    .argument('[folder]', 'Project folder path')
    .option('-h, --help', 'Display help')
    .parse(process.argv);
const projectFolder = program.args[0] || process.cwd();
console.log("generating project");
(0, generator_1.generate)((projectFolder == program.args[0]) ? projectFolder : "");
//# sourceMappingURL=cli.js.map