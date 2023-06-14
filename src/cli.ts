#!/usr/bin/env node

import { Command } from 'commander';
import { generate } from './generator';

const program = new Command();

program
  .version('1.0.3')
  .description('Generate an MVC project using Node and Express')
  .option('--tsc', 'Generate with TypeScript')
  .option('-h, --help', 'Display help')
  .argument('[folder]', 'Project folder path')
  .parse(process.argv);

  const options = program.opts();

  if (options.help) 
  {
    program.help();
  } 
  else 
  {
    const projectFolder = program.args[0] || process.cwd();

    console.log("generating project");
    console.log("------------------");

    
    const useTypeScript = (options.tsc === true);
    
    console.log((useTypeScript) ? "--with TypeScript" : "--no TypeScript");

    generate((projectFolder == program.args[0]) ? projectFolder : "", useTypeScript);
  }
