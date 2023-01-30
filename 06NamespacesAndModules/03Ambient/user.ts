/// <reference path="./ambientModule.d.ts" />

import { SayHello, helloworld } from "HelloWorld"; // import variables from ambient module "HelloWorld"

SayHello(); // no err while compiling, but it does not really exist in runtime
