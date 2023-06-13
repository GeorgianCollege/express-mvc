import * as fs from 'fs-extra';
import * as path from 'path';
import * as ejs from 'ejs';

function generateFile(templatePath: string, outputPath: string, data: Record<string, any>) 
{
  const template = fs.readFileSync(templatePath, 'utf-8');
  const rendered = ejs.render(template, data);
  fs.writeFileSync(outputPath, rendered);
}

export function generate(projectFolder: string) 
{
  console.log("beginning to generate files from the template folder");
  const templateDir = path.join(__dirname, '../templates');

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
  generateFile(path.join(templateDir, 'package.json'), path.join(projectFolder, 'package.json'), {});
  generateFile(path.join(templateDir, 'tsconfig.json'), path.join(projectFolder, 'tsconfig.json'), {});

  // Generate MVC structure
  const configFolder = path.join(projectFolder, 'config');
  const controllersFolder = path.join(projectFolder, 'controllers');
  const modelsFolder = path.join(projectFolder, 'models');
  const viewsFolder = path.join(projectFolder, 'views');
  const routesFolder = path.join(projectFolder, 'routes');

  fs.mkdirSync(configFolder);
  fs.mkdirSync(controllersFolder);
  fs.mkdirSync(modelsFolder);
  fs.mkdirSync(viewsFolder);
  fs.mkdirSync(routesFolder);

  // Generate example files
  generateFile(path.join(templateDir, 'config', 'app.ts'), path.join(configFolder, 'app.ts'),{});
  generateFile(path.join(templateDir, 'controllers', 'HomeController.ts'), path.join(controllersFolder, 'HomeController.ts'),{});
  generateFile(path.join(templateDir, 'models', 'UserModel.ts'), path.join(modelsFolder, 'UserModel.ts'), {});
  generateFile(path.join(templateDir, 'views', 'home.ejs'), path.join(viewsFolder, 'home.ejs'), {});
  generateFile(path.join(templateDir, 'routes', 'home.ts'), path.join(routesFolder, 'home.ts'), {});

  generateFile(path.join(templateDir, 'server.ts'), path.join(projectFolder, 'server.ts'), {});
  
  console.log('Project generated successfully!');
}
