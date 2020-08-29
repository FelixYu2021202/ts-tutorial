/// <reference path="./basic.ts" />

namespace Store {
    export class Box extends Thing {
        type: "box";
        constructor(public width: number, public height: number, public depth: number, number: number) {
            super("box", number);
        }
    }
}
