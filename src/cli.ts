#!/usr/bin/env node

import { Command } from 'commander';
import { generate } from './generator';

const program = new Command();
program.version('1.0.2').description('Generate an MVC TypeScript project');

program
  .argument('[folder]', 'Project folder path')
  .option('-h, --help', 'Display help')
  .parse(process.argv);

const projectFolder = program.args[0] || process.cwd();

console.log("generating project");
generate((projectFolder == program.args[0]) ? projectFolder : "");
