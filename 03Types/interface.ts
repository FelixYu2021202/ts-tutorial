// required: you can use "Required" to require all the members:
type _required<T> = {
    [P in keyof T]-?: T[P]; // this means: "every key in type 'T' isn't optional and the type is the type in 'T'"
};

interface Labeled { // you can use "Required" to require all the members
    label: String // the "String" is an interface declared in lib.es5
}
function printLabel(labeled: Labeled) {
    console.log(labeled.label);
}
printLabel({label: 'hello'}); // ok;
printLabel({label: '10 sized', size: 10} as Labeled); // ok, at least 'label' exist

// optional: you can use "Partial" to make every members optional:
type _partial<T> = {
    [P in keyof T]?: T[P]; // this means: "every key in type 'T' is optional and the type is the type in 'T'"
}

interface Square {
    width?: number;
    height?: number;
    area: number;
}
let square: Square = {
    height: 1111,
    area: 1234321
}

// readonly: you can use "Readonly" to make every members optional:
type _readonly<T> =  {
    readonly [P in keyof T]: T[P]; // this means: "every key in type 'T''s type is the type in 'T' and marked readonly";
}

interface RightTriangle {
    readonly hook: number;
    readonly share: number;
    readonly string: number;
}
let triangle: RightTriangle = {
    hook: 3,
    share: 4,
    string: 5
}
// triangle.hook = 4; // error, member 'hook' is readonly

/**
 * @type ReadonlyArray: an read-only array with no array-changing functions
 */

// assertion: use as instead of "<>"

// printLabel({label: 'a 10 sized', size: 10}); // error: member "size" doesn't exist on type Labeled
printLabel({label: 'a 10 sized', size: 10} as Labeled); // ok
printLabel(<Labeled>{label: 'a 10 sized', size: 10}); // also ok

// function interface: just a function type without function name

interface Func {
    (...args: any): any
}
let fn: Func = function() {
    console.log('log now!');
}

// index signature (indexer)

interface MyArray {
    [index: number]: number; // this means: "every number index in this object is typed number";
}
// type index signature

type R = {
    [T in keyof Window]: Window[T]; // copy every keys and types from Window
}

// class interface

interface Class<T> extends Function {
    new (...args: any): T;
    prototype: T;
}

let class1: Class<{ name: string }> = class {
    name: "instanced";
}

// interface extending

interface A {
    name: string;
}
interface B extends A { // the hole thing is { name: string, father: B }
    father: B;
}

// interface extending class

class C {
    ctor: typeof C;
}
interface D extends C { // the hole thing is { ctor: typeof C, __ctor__: typeof D }
    __ctor__: typeof C & D;
}

// multiple extending

interface Some extends Labeled, _partial<String>, Square, RightTriangle, Func, A, B, C, D {}
