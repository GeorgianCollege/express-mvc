import * as fs from 'fs-extra';
import * as path from 'path';
import * as ejs from 'ejs';

function generateFile(templatePath: string, outputPath: string, data: Record<string, any>) {
  const template = fs.readFileSync(templatePath, 'utf-8');
  const rendered = ejs.render(template, data);
  fs.writeFileSync(outputPath, rendered);
}

function generateProjectStructure(projectName: string, projectDirectory: string) 
{
  console.log("beginning to generate files from the template folder");
  const templateDir = path.join(__dirname, '../templates');

  // Create project directory
  fs.mkdirSync(projectDirectory);

  // Generate files from templates
  generateFile(path.join(templateDir, 'package.json'), path.join(projectDirectory, 'package.json'), {
    projectName,
  });
  generateFile(path.join(templateDir, 'tsconfig.json'), path.join(projectDirectory, 'tsconfig.json'), {});

  // Generate MVC structure
  const srcDirectory = path.join(projectDirectory, 'src');
  const controllersDirectory = path.join(srcDirectory, 'controllers');
  const modelsDirectory = path.join(srcDirectory, 'models');
  const viewsDirectory = path.join(srcDirectory, 'views');
  const routesDirectory = path.join(srcDirectory, 'routes');

  fs.mkdirSync(srcDirectory);
  fs.mkdirSync(controllersDirectory);
  fs.mkdirSync(modelsDirectory);
  fs.mkdirSync(viewsDirectory);
  fs.mkdirSync(routesDirectory);

  // Generate example files
  generateFile(
    path.join(templateDir, 'controllers', 'HomeController.ts'),
    path.join(controllersDirectory, 'HomeController.ts'),
    {}
  );
  generateFile(path.join(templateDir, 'models', 'UserModel.ts'), path.join(modelsDirectory, 'UserModel.ts'), {});
  generateFile(path.join(templateDir, 'views', 'home.ejs'), path.join(viewsDirectory, 'home.ejs'), {});
  generateFile(path.join(templateDir, 'routes', 'home.ts'), path.join(routesDirectory, 'home.ts'), {});
}

export function generate(projectName: string, projectDirectory: string) 
{
  generateProjectStructure(projectName, projectDirectory);
  console.log('Project generated successfully!');
}
