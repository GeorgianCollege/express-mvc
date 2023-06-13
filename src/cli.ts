#!/usr/bin/env node

import { Command } from 'commander';
import { generate } from './generator';

const program = new Command();
program.version('1.0.5').description('Generate an MVC project using Node, Express and TypeScript');

program
  .argument('[folder]', 'Project folder path')
  .option('-h, --help', 'Display help')
  .parse(process.argv);

const projectFolder = program.args[0] || process.cwd();

console.log("generating project");
console.log("------------------");
generate((projectFolder == program.args[0]) ? projectFolder : "");
