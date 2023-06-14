import * as fs from 'fs-extra';
import * as path from 'path';
import { Argument } from './argument';

// Recursive Function that copies files and folders from sourceFolder to destinationFolder
function Scaffold(sourceFolder: string, destinationFolder: string): void
{
  fs.readdirSync(sourceFolder).forEach((item) => 
  {
    const sourcePath = path.join(sourceFolder, item);
    const destinationPath = path.join(destinationFolder, item);
    const stats = fs.statSync(sourcePath);

    if (stats.isFile()) 
    {
      fs.copyFileSync(sourcePath, destinationPath);
    } else if (stats.isDirectory()) 
    {
      fs.mkdirSync(destinationPath);
      Scaffold(sourcePath, destinationPath);
    }
  });
}

export function generate(projectFolder: string, argument: Argument) 
{
  console.log("beginning to generate files from the template folder");

  let sourceFolder: string = "";

  if(!argument.api && argument.tsc)
  {
    sourceFolder = "../templates/mvctsc/";
  }
  else if(argument.api && argument.tsc)
  {
    sourceFolder = "../templates/apitsc/";
  }
  else
  {
    sourceFolder = "../templates/mvcjs/";
  }

  const templateDir = path.join(__dirname, sourceFolder);

  // Create project directory
  if(projectFolder != "")
  {
    fs.mkdirSync(projectFolder);
  }
  else
  {
    projectFolder = './';
  }
  
  // Generate files from templates
  Scaffold(templateDir, projectFolder);
  
  console.log("Project generated successfully!\n");
  console.log("Don't forget to run: ")
  console.log("%c - npm install", "font-weight: bold");

  if(argument.tsc)
  {
    console.log("%c - npm run build", "font-weight: bold");
  }

  if(argument.api)
  {
    console.log("%c - import the sample data", "font-weight: bold");
  }

}
