// number/normal enum, every number member can be used like a normal number
enum a { // { a: 0, b: 1, 0: "a", 1: "b" }
    a, // 0
    b // 1
}
// string enum: every enum number can have a string literal value

enum b {
    a = "asd",
    b = "456"
}

// please do not use duplicated names like this 👇
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
    h // = ? want the answer, then see 57:1
}

// use enums as types

let d: a = a.a;
d = a.b; // ok
let e: c.f = c.f;
// e = c.h; // err: c.h isn't assignable to type c.f

// silly bugs finding

function f(g: c) {
    if (g == c.a && g == c.b) { // see it works
        return true;
    }
    return false;
}

// get enum keys

type h = keyof typeof c; // type h = "a" | "b" | ... | "g" | "h" | 0 | 1 | "1234" | ... | 2566 | ???

// ambient enum

declare enum i { // { a: 1, b: ???, c: 2, 1: "a", 2: "c" }
    a = 1,
    b, // compiler doesn't know the value of b, unless you have given a value to it.
    c = 2,
}
2567;