// generic types will let compiler know more specific types, like:

// 1. normal function

function a(val: number): number { // only number
return val;
}

// 2. more open

function b(val: any): any { // compiler doesn't know the type
    return val;
}

// 3. generic type

function c<T>(val: T): T { // compile know the type is the type of val
    return val;
}

// generic type extends

function d<T extends Function>(val: T): T { // let compiler know it's a function
    val();
    return val;
}

// generic type class

function e<T, A extends Array<any>>(val: { new (...args: A): T }, ...args: A): T { // this function's parameter is magic!
    return new val(...args);
}
e(class E {
    descriptor: string;
    constructor(name: string, subsentence?: string) {
        this.descriptor = `instance ${name} created by e, ${subsentence}`;
    }
}, "f", "hello!").descriptor; // = "instance f created by e, hello!"
