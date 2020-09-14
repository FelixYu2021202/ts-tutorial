/// <reference path="./ambientModule.d.ts" />

import { SayHello, helloworld } from "HelloWorld"; // import variables from ambient module "HelloWorld"

SayHello(); // ok in compiler, but it's not *really* exist in runtime
