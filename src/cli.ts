#!/usr/bin/env node

import { Command } from 'commander';
import { generate } from './generator';
import { Argument } from './argument';

const program = new Command();

program
  .version('1.1.2')
  .description('Generate an MVC project using Node and Express')
  .option('--api', 'No Views folder, creates an Express API')
  .option('--auth', 'Adds Authentication to the project')
  .option('--tsc', 'Generate with TypeScript')
  .option('--hbs', 'use Handlebars as the view engine')
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

    let argument = new Argument();
    argument.api = options.api;
    argument.tsc = options.tsc;
    argument.hbs = options.hbs;
    
    console.log((argument.tsc) ? "--with TypeScript" : "--no TypeScript");
    console.log(((argument.hbs) && (!argument.api)) ? "--with Handlebars" : "");

    generate((projectFolder == program.args[0]) ? projectFolder : "", argument);
  }
