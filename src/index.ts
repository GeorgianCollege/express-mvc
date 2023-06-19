//export { generate } from './generator';


import { generate } from './generator';
import { Argument } from './argument'

let argument = new Argument();
argument.auth = true;
argument.tsc = true;
argument.api = true;

generate('./test', argument);
