import printer = require("./export"); // and 'const ${name} = require("${module}")' are changed to 'import ${name} = require("${module}")'
printer.print('hello', "1234", 1234); // the function parameters are changed to 'data_0: string, ...data_1: Array<any>'