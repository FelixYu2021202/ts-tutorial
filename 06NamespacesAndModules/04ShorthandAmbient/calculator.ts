/// <reference path="./shorthandAmbient.d.ts" />

import Calculator, { digits } from "calculate";

export default new Calculator(digits); // ok, they're typed any

digits.Calculator.constructor.digits(Calculator.cal.instance); // no compiling err, but all fail at runtime
