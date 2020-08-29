//// intersection types: see the demo below v

// first, we have type a

type A = {
    greet: string,
    name: string,
    sex: string,
    stand(): A,
    status: string
}

// then, we have type b

type B = {
    greet: string,
    name: string,
    sex: string,
    dance(): B,
    status: string
}

//// everyone knows, there are many member exist on both A and B, so we can use intersection types to let we not to repeat those members

type Person = {
    greet: string,
    name: string,
    sex: string,
    status: string
}

// we got a handler! use it to intersect new A and new B

type a = Person & { // this means type {stand(): a} and type Person combined together, so the result is {greet: string, name: string, sex: string, stand(): a, status: string}
    stand(): a
}

// same as new b:

type b = Person & { // because these intersection types are similar to types extends, so we usually call it 'extends' or 'rewrite'
    dance(): B
}
