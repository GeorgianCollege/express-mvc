import * as fs from 'fs-extra';
import * as path from 'path';

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

export function generate(projectFolder: string, useTypescript: boolean) 
{
  
  console.log("beginning to generate files from the template folder");
  const templateDir = path.join(__dirname, (useTypescript) ? '../templates/TypeScript/' : '../templates/JavaScript/');

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
  if(useTypescript)
  {
    console.log("%c - npm run build", "font-weight: bold");
  }

}
