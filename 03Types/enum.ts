// number/normal enum, every member's value can be used as a index to find the member's name
enum a { // { a: 0, b: 1, 0: "a", 1: "b" }
    a, // 0
    b // 1
}
// string enum: every enum member can have a string literal value

enum b {
    a = "asd",
    b = "456"
}

// duplicated names
enum _b { // { b: "b" }
    b = "b"
}

// mixed enum
enum c {
    a,
    b,
    c = "1234",
    d = "7894",
    e = 2564,
    f,
    g,
    h // = ? see 57:1
}

// use enums as types

let d: a = a.a;
d = a.b; // ok
let e: c.f = c.f;
// e = c.h; // err: c.h isn't assignable to type c.f

// silly bugs finding

function f(g: c) {
    if (g == c.a && g == c.b) { // g cant be equal to two different values at the same time
        return true;
    }
    return false;
}

// get enum keys

type h = keyof typeof c; // type h = "a" | "b" | ... | "g" | "h" | 0 | 1 | "1234" | ... | 2566 | ???

// ambient enum

declare enum i { // { a: 1, b: ???, c: 2, 1: "a", 2: "c" }
    a = 1,
    b, // compiler doesn't know the value of b, unless you give a value to it.
    c = 2,
}
2567;