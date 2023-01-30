/// <reference path="./basic.ts" />

// add more things to it!

namespace Store {
    var pool: Array<Thing>;
    export function buy(things: Array<Thing>) {
        pool.push(...things);
    }
    export function sellFromPool(number: number) {
        return pool.splice(0, number);
    }
}
