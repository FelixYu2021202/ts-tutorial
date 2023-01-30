// generic types will let compiler know more specific types, like:

// 1. normal function

function a(val: number): number { // only number
    return val;
}

// 2. any type

function b(val: any): any { // the compiler doesn't know the type(the parameter's type can be different to the return type)
    return val;
}

// 3. generic type

function c<T>(val: T): T { // the compiler know that the return type is the same as the parameter's type
    return val;
}

// generic type extends

function d<T extends Function>(val: T): T { // the compiler know that the return type and the parameter's type are all Function
    val();
    return val;
}

// generic type class

function e<T, A extends Array<any>>(val: { new(...args: A): T }, ...args: A): T {
    return new val(...args);
}
e(class E {
    descriptor: string;
    constructor(name: string, subsentence?: string) {
        this.descriptor = `instance ${name} created by e, ${subsentence}`;
    }
}, "f", "hello!").descriptor; // "instance f created by e, hello!"
