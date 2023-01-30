// simple function

function add1(num: number) { // infered return type number
    return num + 1;
}

// type function

function toString(obj: any): string { // a function's return type can be defined after the bracket of parameters
    return String(obj);
}

// arrow function

let toNumber = (obj: any) => Number(obj);

// constructor function

function construct() { // when 'class' is not invented, we use constructor functions instead of 'class'
    this.value = "constructor";
}

let constructed = new construct();

// arrow function type

let toBoolean: (obj: any) => boolean =
    (obj: any) => !!obj;

// object function type
let toJSON: {
    (val: object): string
} = JSON.stringify;

// optional, default and rest parameters

function adds(a = 1, b?: number, ...c: Array<number>) { // that means, if you don't emit a, then a will be 1, if you don't emit b, then it'll be null, if you emit more than two parameters, then third and more will be put into the array c
    let sum = a;
    if (c) {
        sum += <number>b;
        for (let i = 0; i < c.length; i++) sum += c[i];
        return sum;
    }
    if (b) {
        return sum + b;
    }
    return sum;
}

// 'this' and arrow function

let obj = {
    name: "obj_001",
    getname() {
        return this.name; // this is obj
    },
    getproperty: (prop: string) => this[prop] // this is window(or maybe other global variables in different environment)
}

toNumber({
    a() {
        toBoolean({
            b: () => {
                this.a; // captured this is parameter of toNumber
            }
        })
    }
});

function noThis(this: void) { // make this void, when you run this function, you don't need to emit 'this'(skip the first 'this' parameter)
    // this.a; // err: no 'a' in type void
}
noThis();

// overloads

// function calculate(val: any): string; // no! it'll always return type string! When write overloads, write the most specific overload first, write the least specific overload last
function calculate(val: string): boolean; // overloads
function calculate(val: number): object;
function calculate(val: boolean): number;
function calculate(val: any): string;
function calculate(val: any) { // implements
    if (typeof val == "string") return !!val;
    if (typeof val == "number") return Object({
        val,
        toBoolean,
        toNumber,
        toString
    })
    if (typeof val == "boolean") return Number(val);
    return `${val}`;
}

// or use object function type

let calc: { // it can be called as any of the four functions
    (val: string): boolean;
    (val: number): object;
    (val: boolean): number;
    (val: any): string;
} = function (val: any) {
    if (typeof val == "string") return !!val;
    if (typeof val == "number") return Object({
        val,
        toBoolean,
        toNumber,
        toString
    })
    if (typeof val == "boolean") return Number(val);
    return `${val}`;
}
