// boolean

let isDone: boolean = false;
let hasDone: Boolean = false; // ok, but no need to use object types. (capitalized "boolean" is a object with boolean value but it's not a boolean)

// number

let int: number = 2;
let pi: number = 3.14;
let hex: number = 0xffffff;
let octal: number = 0o777;
let binary: number = 0b1111;
let Int: Number = 2;

// string

let greeting: string = 'Hello';
let end: string = "there";
let sentence: string = `${greeting} ${end}!`; // same as: greeting + ' ' + end + '!';
let str: String = '123456789';

// array

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [2, 4, 6, 8]; // formal

// tuple

let tuple: [number, string] = [1234, "asdf"];
// tuple = ["1234", 7890];
// not ok ---^-------^   types don't match
// tuple[0].substr(0);
// not ok ----^       types don't match
// tuple[2] = 5678;
// not ok^           index too big

// enum

enum Color {
    Red, // 0
    Green, // 1
    Blue // 2
}
let color: Color = Color.Green; // color = 1

enum Color2 {
    Red = 2,
    Green, // 3
    Blue // 4
}
let color2: Color2 = Color2.Red; // color = 2

enum Color3 {
    Red = "r",
    Green = "g",
    Blue = "b"
}
let color3: Color3 = Color3.Blue; // color = "b"

const enum Count { one, two, three, four, five };
let count: Count = Count.three; // <------------------- these will be translated into "let count = 2;"

// any

let unsure: any = 1234;
unsure.print(); // ok, "print" may exist
unsure.toString(); // ok, "toString" may exist
let sure = 1234;
// sure.print(); // no, "print" doesn't exist. ("sure" is a number)

// void

function func(): void {
    console.log('from func');
}
let funcR: void = func(); // funcR does not have any value or usage
funcR = undefined; // ok
// funcR = 1234; // not ok

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

// unknown: any object with this type cant be used as a value.

let unk: unknown = 12345;
unk = "unknown"; // ok, it can be assigned
unk = {}; // ok
// let another: object = unk; // err: unk has a type of unknown

// object: any object

function object(obj: object | null) {
    return obj || {};
}
object({});
object(null);
object(Function.prototype);
object(String);
// object(1234); // err: a number isn't a object
object(<Number>1234); // ok: a Number is a object

// assertion: force to change an variable's type. (only the result type is assignable to the origin type)

let string: any = 'hello';
let len: number = (<string>string).length;
