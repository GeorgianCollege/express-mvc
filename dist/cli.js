#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_1 = require("./generator");
const program = new commander_1.Command();
program.version('1.0.0').description('Generate an MVC TypeScript project');
program
    .option('-n, --name <name>', 'Project name')
    .option('-d, --directory <directory>', 'Project directory')
    .option('-h, --help', 'Display help')
    .parse(process.argv);
const projectName = program.opts().name || 'my-project';
const projectDirectory = program.opts().directory || './';
console.log("generating project");
(0, generator_1.generate)(projectName, projectDirectory);
//# sourceMappingURL=cli.js.map