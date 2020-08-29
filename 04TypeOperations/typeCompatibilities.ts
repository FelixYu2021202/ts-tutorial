// type compatibilities: if a variable that's type T1(some type) that's assignable but not equals to T2(another type), then the variable can be the value of any variable that's typed T2

interface Called {
    name: string
}

class Person {
    name: string;
    age: number;
    sex: "m" | "f";
}

let pers1: Called = new Person(); // ok, because type "Person" has property "name"

// function type compatibilities: very different. First, check the return type as normal type compatibility. If it's ok, check the parameters. If one of the type in the position is assignable to the other type in the same position but different function, then it's ok. If all two rules above is ok, then the function is assignable to the other

let x: {
    (a: number): string
}; // more formal than "(a: number) => string"
let y: {
    (x: number, y: string): string
};
y = x; // ok, the first parameter "number" is same as "number", compiler don't check the parameter's name
// x = y; // err: x doesn't have the second parameter.

// because we can lack parameters though the type needs, so we can write easier in some cases

[1, 2, 3, 4].forEach((v, i, a) => console.log(v)); // no lacks in parameters, two parameter unuse
[1, 2, 3, 4].forEach(v => console.log(v)); // ok

// rest and optional parameters

declare function invoke(fn: Function, ...args: Array<any>): void;

invoke(function(a, b) {console.log(a, b)}, 1, 8); // required, but invoke might lack arguments
invoke(function(a?, b?) {console.log(a, b)}, 2, 6); // confused, but it's needed, compiler will never give an error when you write this

// enum type compatibilities: if all the members are number, then they will be typed as numbers.

enum A {q, w, e, r, t, y}
let c: A = 6; // ok, because they are all numbers

// generics type compatibilities

type Empty<t> = {};

let a: Empty<string>;
let b: Empty<number>;
a = b; // ok, because they have the same structures
