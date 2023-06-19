"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const argument_1 = require("./argument");
let argument = new argument_1.Argument();
argument.auth = true;
argument.tsc = false;
argument.api = true;
(0, generator_1.generate)('./test', argument);
//# sourceMappingURL=index.js.map