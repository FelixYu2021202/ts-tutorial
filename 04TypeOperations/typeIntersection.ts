//// intersection types: see the demo below v

// first, we have type a

type A = {
    greet: string, // it can be a comma or a semicolon or nothing
    name: string;
    age: number
    stand(): A;
    status: string
}

// then, we have type b

type B = {
    greet: string,
    name: string,
    age: number,
    dance(): B,
    status: string
}

//// everyone knows, there are many member exist in both A and B, so we can use intersection types so that we dont need to repeat those members

type Person = {
    greet: string,
    name: string,
    age: number,
    status: string
}

// we got a handler! use it to intersect new A and new B

type a = Person & { // this means type {stand(): a} and type Person combined together, so the result is {greet: string, name: string, sex: string, stand(): a, status: string}
    stand(): A
}

// same as new b:

type b = Person & { // because these intersection types are similar to types extends, so we usually call it 'extends' or 'rewrite'
    dance(): B
}
