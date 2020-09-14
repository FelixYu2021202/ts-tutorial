// boolean

let isDone: boolean = false;
let hasDone: Boolean = false; // also ok, but useless

// number

let int: number = 2;
let pi: number = 3.14;
let hex: number = 0xffffff;
let octal: number = 0o777;
let binary: number = 0b1111;
let Int: Number = 2; // ok, useless

// string

let greeting: string = 'Hello';
let end: string = "there";
let sentence: string = `${greeting} ${end}!`; // to: greeting + ' ' + end + '!';
let str: String = '123456789'; // useless

// array

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [2, 4, 6, 8]; // more formal

// tuple

let tuple: [number, string] = [1234, "asdf"];
// tuple = ["1234", 7890];
// not ok ---^-------^
// tuple[0].substr(0);
// not ok ----^
// tuple[2] = 5678;
// not ok^

// enum

enum Color {
    Red, // 0
    Green, // 1
    Blue // 2
}
let color: Color = Color.Green;

enum Color2 {
    Red = 2,
    Green, // 3
    Blue // 4
}
let color2: Color2 = Color2.Red;

enum Color3 {
    Red = "r",
    Green = "g",
    Blue = "b"
}
let color3: Color3 = Color3.Blue;

const enum Count { one, two, three, four, five } // <-|
let count: Count = Count.three; // <------------------- these will be translated into "let count = 2;"

// any

let unsure: any = 1234;
unsure.print(); // ok, "print" might exist
unsure.toString(); // ok, "toString" does exist but compiler doesn't know
let sure = 1234;
// sure.print(); // no, "print" doesn't exist

// void

function func(): void {
    console.log('from func');
}
let funcR: void = func(); // useless
funcR = null;
funcR = undefined;
// funcR = 1234; // no ok

// never: this type is usually for functions, with unreachable end point

function error(): never {
    throw new Error('Error!');
}
function runError() { // infered never
    error();
}
function infinityTimes(cb: Function) { // infered never
    while (true) cb();
}

// object: any object

function object(obj: object | null) {
    return obj || {};
}
object({});
object(null);
object(Function.prototype);
object(String);
// object(1234); // err: numbers aren't objects

// assertion: force to change an variable's type. (only the result type is assignable to the origin type)

let string: any = 'hello';
let len: number = (<string>string).length;
