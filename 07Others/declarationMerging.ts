/**
 * Declaration merging, some declaration can merge, but some not, the table is below this line
 * ---
 * Type of declaration|Type|Value|Merge
 * 1. Namespace       |No  |Yes  |Yes
 * 2. Class           |Yes |Yes  |No
 * 3. Interface       |Yes |No   |Yes
 * 4. Enum            |Yes |Yes  |Yes
 * 5. Type            |Yes |No   |No
 * 6. Function        |No  |Yes  |Yes(overload)
 * 7. Variable        |No  |Yes  |No
 */

// 1. Namespace: Value+Merging

namespace a {
    export var b = 1;
}
namespace a { // merging
    export var c = 2;
}
// let d: a; // err: a isn't a type
a.b; // a have value
a.c;

// 2. Class: Type+Value

class e {
    f = 1;
}
// class e { // err: class cannot merge
//     g = 2;
// }
let h: e; // e is a type
e.prototype; // e is a value
e.arguments;

// 3.Interface: Type+Merging

interface i {
    j: 1;
}
interface i { // merging
    k: 1;
}
let l: i; // i is a type
// i.j; // err: i isn't a value

// 4.Enum: the only one with Type + Value + Merging

enum m {
    n = 0
}
enum m { // merging
    o = 1
}
let p: m; // m is a type
m.n; // m is a value
m.o;

// 5. Type: just a Type

type q = { value: number };
// type q = { name: string }; // type cannot merge
let r: q; // q is a type
// q.value; // q isn't a value

// 6. Function: Value+Merging

function s(name: string): number;
function s(name: number): string; // overloads merging
function s(name: string | number) { // only one implemention
    if (typeof name == "string") return name.charCodeAt(0);
    if (typeof name == "number") return String.fromCharCode(name);
}

// let t: s; // s isn't a type
s.arguments; // s is a value
s.prototype;

// 7. Variable: just a value

let u = 123;
// let u = 456; // variable cannot merge
// let v: u; // u isn't a type
u.toFixed; // u is a value
