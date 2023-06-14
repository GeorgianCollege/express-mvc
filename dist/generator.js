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
function Scaffold(sourceFolder, destinationFolder) {
    fs.readdirSync(sourceFolder).forEach((item) => {
        const sourcePath = path.join(sourceFolder, item);
        const destinationPath = path.join(destinationFolder, item);
        const stats = fs.statSync(sourcePath);
        if (stats.isFile()) {
            fs.copyFileSync(sourcePath, destinationPath);
        }
        else if (stats.isDirectory()) {
            fs.mkdirSync(destinationPath);
            Scaffold(sourcePath, destinationPath);
        }
    });
}
function generate(projectFolder, useTypescript) {
    console.log("beginning to generate files from the template folder");
    const templateDir = path.join(__dirname, (useTypescript) ? '../templates/TypeScript/' : '../templates/JavaScript/');
    if (projectFolder != "") {
        fs.mkdirSync(projectFolder);
    }
    else {
        projectFolder = './';
    }
    Scaffold(templateDir, projectFolder);
    console.log("Project generated successfully!\n");
    console.log("Don't forget to run: ");
    console.log("%c - npm install", "font-weight: bold");
    if (useTypescript) {
        console.log("%c - npm run build", "font-weight: bold");
    }
}
exports.generate = generate;
//# sourceMappingURL=generator.js.map