// type inference: if you don't write a type before declaring a variable, TypeScript compiler will infer a best type to the variable

// basic

let x = 1; // 1 has typed number (not value type 1), so compiler infered type number

// best common type: when a type is made from several different expressions, the infered type is calculate to be the "best common type":

let ys = [[1, 2, 3, 4], ['a', 'b', 'c'], [true, false]]; // ideally, we want it to be "any[][]", but the compiler infered "(number[] | string[] | boolean[])[]"
