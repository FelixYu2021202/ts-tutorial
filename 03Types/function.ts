// simple function

function add1(num: number) {
    return num + 1;
}

// type function

function toString(obj: any): string { // functions' type can be defined after the bracket of parameters
    return String(obj);
}

// arrow function

let toNumber = (obj: any) => Number(obj);

// arrow type function

let toBoolean: (obj: any) => boolean = 
    (obj: any) => !!obj;

// optional, default and rest parameters

function adds(a = 1, b?: number, ...c: Array<number>) { // that means, if you don't emit a, then a will be 1, if you don't emit b, then it'll be null, if you emit more than two parameters, then third and more will be put into the array c
    let sum = a;
    if (c) {
        sum += b;
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
    getproperty: (prop: string) => this[prop] // this is window
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
