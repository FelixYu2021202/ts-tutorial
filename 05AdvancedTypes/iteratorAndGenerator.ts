// iterator: a object with a generator function name [Symbol.iterator]

// runners: the well known iterators are: '...', for..in and for..of

// 1. '...'

let arr = [1, 2, 3, 4];

console.log(...arr); // ok, equals to 'console.log(1, 2, 3, 4)' and 'console.log.apply(console, arr)'

// 2. for in

for (let k in arr) {
    console.log(k); // 0, 1, 2, 3
}

// 3. for of

for (let v of arr) {
    console.log(v); // 1, 2, 3, 4
}

// 4. .next

let iterator = arr[Symbol.iterator](); // get the generator function
iterator.next(); // every time calls next, it will return an object type:
/**
 * {
 *     done?: boolean; // true means it's the last iterating result of the iterator
 *     value: TResult; // the iterated result
 * }
 */

// generators

let iterator1 = {
    [Symbol.iterator]: function *() { // add '*' before after generator function names
        yield 2; // every time, it'll get a value here, 1st: 2, 2nd: 4 ...
        yield 4;
        yield 6;
        yield 8;
        yield 10;
        yield 12;
    }
}

for (let i of iterator1) {
    console.log(i); // 2, 4, 6, 8, 10, 12
}

let iterator2 = {
    times: 10,
    [Symbol.iterator]: function *() {
        for (let i = 0; i < this.times; i++) {
            yield Math.random(); // looping yields
        }
    }
}

for (let i of iterator2) {
    console.log(i); // ..., all values are psuedorandomed
}
