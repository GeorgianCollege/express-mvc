import { Command } from 'commander';
import { generate } from './generator';

const program = new Command();
program.version('1.0.0').description('Generate an MVC TypeScript project');

program
  .option('-n, --name <name>', 'Project name')
  .option('-d, --directory <directory>', 'Project directory')
  .parse(process.argv);

const projectName = program.opts().name || 'my-project';
const projectDirectory = program.opts().directory || './';

generate(projectName, projectDirectory);
