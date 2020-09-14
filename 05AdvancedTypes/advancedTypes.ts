// type intersection

type a = {name: string};
type b = {sub: Function};
type c = a & b; // {name: string, sub: Function}

// union type

type d = a | b; // the variables typed d must have member 'name' or 'sub'

// type guard

let e: d;

if ((e as a).name) { // check if e has property 'name'
    console.log((e as a).name);
}

// perdict

function f(g: a | b): g is b { // check if g typed b
    if ((g as b).sub) return true;
    return false;
}

// 'in' keyword

if ('requireAnimationFrame' in window) { // check if window has property 'requireAnimationFrame'
    console.log('there is');
}

// 'typeof' keyword: return the type of the object.

type h = typeof e; // d, not "object"
console.log(typeof e); // now "undefined", because "let e: d;" didn't give e a value

// 'instanceof' keyword

class i { }

let j = new i;
j instanceof Object; // true, j do have all properties from Object's prototype

// nullable types: if you are using --strictNullChecks, then you can't make any non-null-typed variable null

type str = string | null | undefined;
let k: string = null; // error on --strictNullChecks
let l: str = null; // ok

// value types: many types don't refer to values, but basic types can

type someType = 1 | false | "ok";

let m: someType = 1; // ok
// m = true; // err
m = "ok"; // ok
// m = "no" // err

// enum member type

enum n {
    o,
    p
}

let o: n.o = n.o;
// o = n.p; // err

// this type

abstract class p {
    abstract getThis(): this; // this refers to p
}

// indexer type: if T1(some type) is a string and T2(another type) has a key that's assignable to T1, than you can use T2[T1] to get the type of the value
// for example: give the function below a type

function map(source, properties) {
    return properties.map(key => source[key]);
}

// answer:

function map2<SourceType, Key extends keyof SourceType>(source: SourceType, properties: Key[]): SourceType[Key][] {
    return properties.map(key => source[key]);
}

// mapped type: it's similar to index type

type Part<SourceType> = {
    [Key in keyof SourceType]?: SourceType[Key]; // mapped type
}

// conditional type: you can use conditional type to change the type when the condition result changes

type isNumber<T> = T extends number ? true : false;

let q: isNumber<string> = false; // ok
// q = true; // err: string isn't assignable to number, so q must be false(or null and undefined when no --strictNullCheck)

type TypeName<T> = // a long conditional type
    T extends number ? "number" :
    T extends string ? "string" :
    T extends boolean ? "boolean" :
    T extends symbol ? "symbol" :
    T extends undefined ? "undefined" :
    T extends null ? "null" :
    T extends void ? "void" :
    T extends never ? "never" :
    T extends Function ? "function" :
    "object"

let strName: TypeName<void | string | null | undefined> = "void"; // ok
strName = "string"; // ok
// strName = "number"; // err: number isn't assignable to string | void | undefined | null

// 'infer' keyword

type Returns<FuncType extends Function> = FuncType extends (...args: any) => infer U ? // automatically inferred U
    U : never;

// multiple type inference: similar to best common type

type Types<T> = T extends {
    a: infer U,
    b: infer U
} ? U : never;

type R = Types<{
    a: string,
    b: string
}>; // R: string

type S = Types<{
    a: number,
    b: Types<{
        a: string,
        b: boolean
    }> // b: string | boolean
}>; // S: number | string | boolean

// predefined types in lib.d.ts:

// 1. Partial

type T = Partial<{
    a: number
}>; // T: { a?: number }

// 2. Required

type U = Required<{
    b?: number
    readonly c: string
}>; // U: { b: number, c: string }

// 3. Readonly

type V = Readonly<{
    a?: number
}>; // V: { readonly a: number }

// 4. Pick

type W = Pick<{
    a: number,
    d: string,
    e: boolean
}, "d" | "e">; // W: { d: string, e: boolean }

// 5. Record

type X = Record<"a" | "b", boolean>; // x: { a: boolean, b: boolean }

// 6. Exclude

type Y = Exclude<"a" | "b" | "c" | "d" | "e", "b" | "d">; // Y: "a" | "c" | "e"

// 7. Omit

type Z = Omit<{
    a: number,
    b: string,
    c: boolean
}, "a" | 123>; // Z: { b: string, c: boolean }

// 8. NonNullable

type AA = NonNullable<string | number | null | undefined>; // AA: string | number

// 9. Parameters

type AB = Parameters<(name: string, sex: number) => void>; // [string, number]

// 10. ConstructorParameters: similar to Parameters, but only for classes

type AC = ConstructorParameters<new (name: string, sex: number) => any>; // [string, number]

// 11. ReturnType

type AD = ReturnType<(name: string, sex: number) => {
    name: string,
    sex: string;
}> // AD: { name: string, sex: string }

// 12. InstanceType: return type of classes

type AE = InstanceType<new (name: string, sex: number) => AD>; // AE: AD

// 13. ThisParameterType: return the this type in the function

type AF = ThisParameterType<(this: number, hello: string) => string>; // AF: number

// 14. OmitThisParameter: omit the first this type in the function

type AG = OmitThisParameter<(this: number, hello: string) => string>; // AG: (hello: string) => string
