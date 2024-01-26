# @georgiancollege/express-mvc
This package uses a **MVC (Model-View-Controller)** design pattern for the site structure.

It was designed for students at **Georgian College** (https://www.georgiancollege.ca/) but is publicly available.

<br>

## Technologies used:
- NodeJS (https://nodejs.org/en)
- Express (https://expressjs.com/)
- TypeScript (https://www.typescriptlang.org/)
- Bootstrap (https://getbootstrap.com/)
- Font Awesome (https://fontawesome.com/)
- Mongoose (https://mongoosejs.com/)
- Passport (https://www.passportjs.org/)
- JWT (https://jwt.io/)

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
- ```--api - scaffold an Express api that does not include views```
- ```--auth - adds authentication```
- ```--tsc - provide TypeScript support```
- ```--hbs - uses handlebars view engine```

- the default is a **JavaScript** MVC with no Authentication

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

## MVC Site Structure (JavaScript version):
---
```
express-mvc-js
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
├── .env
├── .gitignore
├── package.json
└── server.js
```
---
### Notes:
- The **JavaScript** version uses the CommonJS module pattern (i.e., **```require```** statements)

<br>

## MVC Site Structure (JavaScript version with handlebars):
---
```
express-mvc-js-hbs
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
│       ├── error.hbs
│       ├── index.hbs
│       └── layout.hbs
├── .env
├── .gitignore
├── package.json
└── server.js
```
---
### Notes:
- The **JavaScript with handlebars** version uses the CommonJS module pattern (i.e., **```require```** statements)

<br>

## MVC Site Structure (TypeScript version):
---
```
express-mvc-tsc
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
├── .env
├── .gitignore
├── package.json
├── server.ts
└── tsconfig.json
```
---
### Notes:
- The **TypeScript** version uses the **esm module pattern** (i.e., **```import```** and **```export```** statements)

<br>

## MVC Site Structure (TypeScript version with handlebars):
---
```
express-mvc-tsc-hbs
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
│       ├── error.hbs
│       ├── index.hbs
│       └── layout.hbs
├── .env
├── .gitignore
├── package.json
├── server.ts
└── tsconfig.json
```
---
### Notes:
- The **TypeScript with handlebars** version uses the **esm module pattern** (i.e., **```import```** and **```export```** statements)

<br>

## API Site Structure (JavaScript version):
---
```
express-mvc-api-js
├── Server
│   ├── Config
│   │   ├── app.js
│   │   └── db.ts
│   ├── Controllers
│   │   └── movie.js
│   ├── Models
│   │   └── movie.js
│   └── Routes
│       └── index.js
├── .env
├── .gitignore
├── movies.json
├── package.json
└── server.js
```

<br>

## API Site Structure (TypeScript version):
---
```
express-mvc-api-tsc
├── Server
│   ├── Config
│   │   ├── app.ts
│   │   └── db.ts
│   ├── Controllers
│   │   └── movie.ts
│   ├── Models
│   │   └── user.ts
│   └── Routes
│       └── index.ts
├── .env
├── .gitignore
├── movies.json
├── package.json
├── server.ts
└── tsconfig.json
```
---
### Notes:
- We've include an example **Movie Model** that assumes you will be using **```mongoose```** to connect to **MongoDB**

<br>

## API Site Structure (JavaScript version) includes JWT Authentication:
---
```
express-mvc-api-auth-js
├── Server
│   ├── Config
│   │   ├── app.js
│   │   └── db.ts
│   ├── Controllers
│   │   ├── auth.js
│   │   └── movie.js
│   ├── Models
│   │   ├── movie.js
│   │   └── user.js
│   ├── Routes
│   │   ├── auth.js
│   │   └── index.js
│   └── Util
│       └── index.js
├── .env
├── .gitignore
├── movies.json
├── package.json
└── server.js
```

<br>

## API Site Structure (TypeScript version) includes JWT Authentication:
---
```
express-mvc-api-auth-tsc
├── Server
│   ├── Config
│   │   ├── app.ts
│   │   └── db.ts
│   ├── Controllers
│   │   ├── auth.ts
│   │   └── movie.ts
│   ├── Models
│   │   ├── movie.ts
│   │   └── user.ts
│   ├── Routes
│   │   ├── auth.ts
│   │   └── index.ts
│   └── Util
│       └── index.ts
├── .env
├── .gitignore
├── movies.json
├── package.json
├── server.ts
└── tsconfig.json
```
---
### Notes:

- Uses JWT Authentication