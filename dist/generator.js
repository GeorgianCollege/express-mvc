"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const ejs = __importStar(require("ejs"));
function generateFile(templatePath, outputPath, data) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const rendered = ejs.render(template, data);
    fs.writeFileSync(outputPath, rendered);
}
function generateProjectStructure(projectName, projectDirectory) {
    const templateDir = path.join(__dirname, '../templates');
    fs.mkdirSync(projectDirectory);
    generateFile(path.join(templateDir, 'package.json'), path.join(projectDirectory, 'package.json'), {
        projectName,
    });
    generateFile(path.join(templateDir, 'tsconfig.json'), path.join(projectDirectory, 'tsconfig.json'), {});
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
    generateFile(path.join(templateDir, 'controllers', 'HomeController.ts'), path.join(controllersDirectory, 'HomeController.ts'), {});
    generateFile(path.join(templateDir, 'models', 'UserModel.ts'), path.join(modelsDirectory, 'UserModel.ts'), {});
    generateFile(path.join(templateDir, 'views', 'home.ejs'), path.join(viewsDirectory, 'home.ejs'), {});
    generateFile(path.join(templateDir, 'routes', 'home.ts'), path.join(routesDirectory, 'home.ts'), {});
}
function generate(projectName, projectDirectory) {
    generateProjectStructure(projectName, projectDirectory);
    console.log('Project generated successfully!');
}
exports.generate = generate;
//# sourceMappingURL=generator.js.map