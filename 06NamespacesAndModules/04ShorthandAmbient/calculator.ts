/// <reference path="./shorthandAmbient.d.ts" />

import Calculator, { digits } from "calculate";

export default new Calculator(digits); // ok, they're typed any

digits.Calculator.constructor.digits(Calculator.cal.instance); // ok, all pass compiler, but all fails at runtime
