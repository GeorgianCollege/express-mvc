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
function generateFile(templatePath, outputPath) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    fs.writeFileSync(outputPath, template);
}
function generate(projectFolder) {
    console.log("beginning to generate files from the template folder");
    const templateDir = path.join(__dirname, '../templates');
    if (projectFolder != "") {
        fs.mkdirSync(projectFolder);
    }
    else {
        projectFolder = './';
    }
    generateFile(path.join(templateDir, 'package.json'), path.join(projectFolder, 'package.json'));
    generateFile(path.join(templateDir, 'tsconfig.json'), path.join(projectFolder, 'tsconfig.json'));
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
    generateFile(path.join(templateDir, 'config', 'app.ts'), path.join(configFolder, 'app.ts'));
    generateFile(path.join(templateDir, 'controllers', 'HomeController.ts'), path.join(controllersFolder, 'HomeController.ts'));
    generateFile(path.join(templateDir, 'models', 'UserModel.ts'), path.join(modelsFolder, 'UserModel.ts'));
    generateFile(path.join(templateDir, 'views', 'home.ejs'), path.join(viewsFolder, 'home.ejs'));
    generateFile(path.join(templateDir, 'routes', 'home.ts'), path.join(routesFolder, 'home.ts'));
    generateFile(path.join(templateDir, 'server.ts'), path.join(projectFolder, 'server.ts'));
    console.log('Project generated successfully!');
}
exports.generate = generate;
//# sourceMappingURL=generator.js.map