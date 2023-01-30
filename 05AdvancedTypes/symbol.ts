// symbols: the unique and sheltered key, available since ES2015

let symbol1 = Symbol();

// with description: you can add an optional description to know what the symbol do

let symbol2 = Symbol('key'); // with symbol description
let symbol3 = Symbol('key'); // with same description
symbol2 === symbol3; // false, they're unique
let object1 = {
    [symbol1]: symbol2 // symbols can be used as indices
}

// Symbol.for: get a symbol from the symbol library

let symbol4 = Symbol.for('key2');
let symbol5 = Symbol.for('key2');
symbol4 === symbol5; // true, Symbol.for will always return a same symbol for the same description

// Symbol.keyFor: get the description of a symbol from the symbol library

Symbol.keyFor(symbol4); // 'key2'

// well-known symbols

// 1. Symbol.hasInstance: the function with this symbol is often declared in classes as a static member, if declared, it will be run when there's keyword 'instanceof'

class a {
    static [Symbol.hasInstance]() {
        return false; // reject all the calls of instanceof
    }
}

let b = new a();

b instanceof a; // false, because it always return false

// 2. Symbol.isConcatSpreadable

let arr = [1, 2, 3, 4, [5, 6, 7, 8]];

([0, 1, 2, 3] as Array<any>).concat(arr); // [0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8]

arr[Symbol.isConcatSpreadable] = false;
([0, 1, 2, 3] as Array<any>).concat(arr); // [0, 1, 2, 3, 1, 2, 3, 4, [5, 6, 7, 8]]

// 3. Symbol.iterator: the key of the generator function to make objects iterable. see file 'iterator and generator.ts'

// 4. Symbol.match

'hello world'.match({
    [Symbol.match](string) {
        return ['hello', 'world'];
    }
}); // ['hello', 'world']

// 5. Symbol.replace

'hello there'.replace({
    [Symbol.replace](str, replaceVal) {
        return 'hello ' + replaceVal;
    }
}, 'world'); // 'hello world'

// 6. Symbol.search

'hi HI hello'.search({
    [Symbol.search](str: string) {
        return str.indexOf('HI');
    }
}); // ... the first index of 'HI's existance

// 7. Symbol.species: override the default constructor about how instances should be copied

class Arr extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let ar: Arr = [1, 2];
let sliced = arr.map(x => x); // sliced has a type of Array, not Arr

// 8. Symbol.split: the function called by String.prototype.split

'a'.split({
    [Symbol.split]() {
        return ['a', '\n\r\x00']
    }
}); // ['a', '
// ']

// 9. Symbol.primitive: the key of the function returns a correspond primitive value

let c = {
    [Symbol.toPrimitive](hint: string) {
        if (hint == "number") return 5;
        if (hint == "string") return "2";
        if (hint == "boolean") return true;
        if (hint == "symbol") return Symbol('' + c);
    }
};

// 1 + {} // compiler err: {} isn't assignable to number, runtime 2
// 1 + c; // compiler err: {} isn't assignable to number, but run Symbol.toPrimitive, runtime 6

// 10. Symbol.toStringTag: Object.stringify will return '[object stringTag]', and by default stringTag is 'Object', you can change the stringTag by using the Symbol.toStringTag

let d = {
    [Symbol.toStringTag]: "D"
}
Object.toString.call(d); // '[object D]'

// 11. Symbol.unscopables

let f = {
    property1: 1234,
    property2: 2345
}

with (f) {
    property1; // ok, 1234
}

f[Symbol.unscopables] = {
    property1: true
}

with (f) {
    property1; // err:, it's unscopable
    property2; // ok
}
