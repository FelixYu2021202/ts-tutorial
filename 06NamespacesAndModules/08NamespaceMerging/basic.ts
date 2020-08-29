namespace Store {
    export class Thing {
        constructor(public type: string, public number: number) {}
    }
    export function sell(number: number) {
        return new Thing('store thing', number); // mmm, too many number
    }
}