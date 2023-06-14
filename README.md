# @georgiancollege/express-mvc
This package uses a **MVC (Model-View-Controller)** design pattern for the site structure.

It was designed for students at **Georgian College** (https://www.georgiancollege.ca/) but is publicly available.

<br>

## Technologies used:
- NodeJS (https://nodejs.org/en)
- Express (https://expressjs.com/)
- TypeScript (https://www.typescriptlang.org/)

<br>

## Installation:
---
```
npm i @georgiancollege/express-mvc -g
```

<br>

## Usage:
---
```
> express-mvc <options> [folder]
```

- where **options** is installation options and **folder** is the installation folder. 

- if installation folder is **not** specified, then the express mvc site structure is scaffolded in the current folder.
### Current Installation Options:
---
- ```--tsc - scaffold the MVC site structure with TypeScript support```
- the default is **JavaScript**


<br>
<br>

## Post Installation:
- you will need to issue the following command to install the module dependencies:

```
> npm install 
```

- if you are using the TypeScript version you will need to transpile the ```.ts``` files to ```.js``` as Node and Express require JavaScript:

```
> npm run build
```

<br>

## Site Structure (JavaScript version):
---
```
express-mvc
├── Client
│   ├── Assets
│   │   └── images
│   │       └── .gitkeep
│   ├── Content
│   │   └── app.css
│   └── Scripts
│       └── app.js
├── Server
│   ├── Config
│   │   └── app.js
│   ├── Controllers
│   │   └── index.js
│   ├── Models
│   │   └── user.js
│   ├── Routes
│   │   └── index.js
│   └── Views
│       ├── error.ejs
│       └── index.ejs
├── .gitignore
├── package.json
└── server.js
```
---
### Notes:
- The **JavaScript** version uses the CommonJS module pattern (i.e., **```require```** statements)


<br>


## Site Structure (TypeScript version):
---
```
express-mvc
├── Client
│   ├── Assets
│   │   └── images
│   │       └── .gitkeep
│   ├── Content
│   │   └── app.css
│   └── Scripts
│       └── app.ts
├── Server
│   ├── Config
│   │   └── app.ts
│   ├── Controllers
│   │   └── index.ts
│   ├── Models
│   │   └── user.ts
│   ├── Routes
│   │   └── index.ts
│   └── Views
│       ├── error.ejs
│       └── index.ejs
├── .gitignore
├── package.json
├── server.ts
└── tsconfig.json
```
---
### Notes:
- The **TypeScript** version uses the **esm module pattern** (i.e., **```import```** and **```export```** statements)