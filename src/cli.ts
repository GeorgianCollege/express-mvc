#!/usr/bin/env node

import { Command } from 'commander';
import { generate } from './generator';

const program = new Command();
program.version('1.0.9').description('Generate an MVC project using Node and Express');

program
  .argument('[folder]', 'Project folder path')
  .option('-h, --help', 'Display help')
  .option('--tsc', 'Generate with TypeScript')
  .parse(process.argv);

  if (program.help) 
  {
    program.help();
  } 
  else 
  {
    const projectFolder = program.args[0] || process.cwd();

    console.log("generating project");
    console.log("------------------");

    const options = program.opts();
    const useTypeScript = (options.tsc === true);
    
    console.log((useTypeScript) ? "--with TypeScript" : "--no TypeScript");

    generate((projectFolder == program.args[0]) ? projectFolder : "", useTypeScript);
  }
