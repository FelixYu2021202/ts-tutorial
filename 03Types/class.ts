// class: interface + constructor + prototype

class Greeter {
    greet(sentence: string) {
        console.log(`${this.greeting}, ${sentence}!`);
    }
    constructor(public greeting: string) { } // here automatically create a member 'greeting' and it's public
    // same as: public greeting; constructor(greeting: string) { this.greeting = greeting; }
}
let greeter: Greeter = new Greeter('Hello');
greeter.greet('there!'); // Hello, there!

// class extending

class ExpertGreeter extends Greeter {
    greet(...sentence: Array<string>) {
        for (let i = 0; i < sentence.length; i++) {
            super.greet(sentence[i]); // 'super' is the extended class or '__proto__'
        }
    }
}
let greeter2 = new ExpertGreeter('Hi');
greeter2.greet('there', 'world'); // Hi there! Hi world

// ES private keyword

class Private {
    #name: string;
    name(name?: string) {
        if (name) this.#name = name;
        return this.#name;
    }
}
let private = new Private();
private.name('private'); // ok
// private.#name; // error: '#name' is private

// public, private and protected

class A {
    private name: string;
    protected subName: string;
    public lastName: string;
    getname() { return this.name }
}
class B extends A {
    setname(name) {
        // this.name = name; // 'name' is private
        this.subName = name; // ok, it's protected in subclasses
        this.lastName = name.substr(1); // ok, you can use it anywhere
    }
}
let a = new B();
// a.name; // 'name's private, can only be used in the declared class
// a.subName; // 'subName's protected, can only be used in the declared class and it's subclasses
a.lastName; // 'lastName's public, can be used anywhere

// constructor parameter property readonly

class C {
    constructor(readonly a: string) {
        this.a = "2"; // the readonlies aren't really read only in constructors
    }
    getA() {
        // if (!this.a) this.a = "2"; // 'a's readonly
        return this.a; // ok
    }
}

// accessors

class D {
    private _a: string;
    set a(val: any) {
        this._a = `${val}`;
    }
    get a() {
        console.log('getting a...');
        console.log(this._a);
        return this._a;
    }
}
let d = new D();
d.a = 1234; // ok
d.a = true; // ok
d.a = null; // ok
d.a; // getting a..., null, null

// static: define members of constructor itself not it's instances

class E {
    static instance = new E();
    constructor() {
        if (!E.instance) E.instance = E;
        for (let i in E.instance) this[i] = E.instance[i];
    }
}

new E(); // build an E constructor...

// abstract: build base class that can not be instanced

abstract class F {
    protected name: string;
    abstract getName(): string;
    abstract setName(name: string): void;
}
// let f = new F(); // err: 'F' can not be instanced(or 'newed')
class G extends F {
    getName() { // must implement abstract members
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
}
let g = new G(); // ok to make instances of abstract-class-extending classes
g.setName('g');
g.getName(); // 'g'

// interfaces-implements class

interface _Square {
    length: number;
    area: number;
}
class Square implements _Square {
    length: number; // must implements all the required members in the interface _Square
    get area() {
        return this.length * this.length;
    }
}
let square: _Square = new Square();
square.length = 11111;
square.area; // 123454321
