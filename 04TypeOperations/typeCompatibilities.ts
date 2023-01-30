// type compatibilities: if type T1 is assignable to type T2 but not equal to type T2, then we can say that a variable with a type of T1 has a type of T2

interface Called {
    name: string
}

class Person {
    name: string;
    age: number;
    sex: "m" | "f";
}

let pers1: Called = new Person(); // ok, because type Person has property name. (Person is assignable to Called)

// function type compatibilities: function type T1 is assignable to function type T2 only when their return type are the same and every parameters' type
// in T2 is the same as the parameter's type in the same position in T1

let x: {
    (a: number): string
} = (a: number) => `hello, ${a}`; // more formal than "(a: number) => string"
let y: {
    (x: number, y: string): string
};
y = x; // ok, the first parameter "number" is same as "number", the compiler don't check the parameter's name
// x = y; // err: x doesn't have the second parameter.

// because we can lack parameters though the type needs, we can write easier in some cases

[1, 2, 3, 4].forEach((v, i, a) => console.log(v)); // no lacks in parameters, two parameter unuse
[1, 2, 3, 4].forEach(v => console.log(v)); // ok

// rest and optional parameters

declare function invoke(fn: Function, ...args: Array<any>): void;

invoke(function (a, b) { console.log(a, b) }, 1, 8); // required, but invoke might lack arguments
invoke(function (a?, b?) { console.log(a, b) }, 2, 6); // confused, but it's needed, there compiler won't throw an error when you write this

// enum type compatibilities: if all the members are number, then they will be typed as numbers.

enum A { q, w, e, r, t, y }
let c: A = 100; // ok, it can be any number

// generics type compatibilities

type Empty<t> = {};

let a: Empty<string>;
let b: Empty<number> = {};
a = b; // ok, because they have the same members. (no members)
