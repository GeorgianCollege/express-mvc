const fs = require('fs');
const path = require('path');

const gitignoreContent = `node_modules/\n.env\n`;
const envContent = `YOUR_SECRET="SECRET_KEY"`;

const createFileIfNotExist = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
};

// Creating .gitignore and .env
createFileIfNotExist(path.join(__dirname, '.gitignore'), gitignoreContent);
createFileIfNotExist(path.join(__dirname, '.env'), envContent);

// Function to remove postinstall script from package.json
const updatePackageJson = () => {
  const packageJsonPath = path.join(__dirname, 'package.json');

  fs.readFile(packageJsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return;
    }

    const packageJson = JSON.parse(data);
    delete packageJson.scripts.postinstall;

    fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing package.json:', writeErr);
      }
    });
  });
};

// Function to delete this script
const deleteThisScript = () => {
  fs.unlink(path.join(__dirname, 'createFiles.js'), (err) => {
    if (err) {
      console.error('Error deleting createFiles.js:', err);
    } else {
      console.log('createFiles.js was deleted');
    }
  });
};

// Executing functions
updatePackageJson();
deleteThisScript();
