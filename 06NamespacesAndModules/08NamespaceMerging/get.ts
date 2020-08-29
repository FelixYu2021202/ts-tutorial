/// <reference path="./basic.ts" />

// want to make it more complete!

namespace Store {
    var pool: Array<Thing>;
    export function buy(things: Array<Thing>) {
        pool.push(...things);
    }
    export function sellFromPool(number: number) {
        return pool.splice(0, number);
    }
}
