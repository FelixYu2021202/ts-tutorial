import 'reflect-metadata'
import assert = require("assert");

// basic decorator: a decorator function have three parameters: target, name and descriptor, and run it using '@'

let makeReadonly: (is: boolean) => Function = (is: boolean) => <T>(_target: any, _name: string, descriptor: TypedPropertyDescriptor<T>) => { descriptor.writable = !is }

class a {
    @makeReadonly(true)
    b: string = "1234";
}
new a().b = "4564"; // runtime error, because d.e is readonly

let checkName: (name: string) => PropertyDecorator = (name: string) => (_target: any, propName: string) => assert(name == propName, "invalid name!");

class c {
    @checkName("d")
    e: ""
}
let f = 1; // won't run anymore

// meta data: Reflect.getMetadata

let Validate: Function = (target: object, key: string, descriptor: PropertyDescriptor) => {
    let setter = descriptor.set;
    descriptor.set = function (v) {
        let type = Reflect.getMetadata("type", target, key);
        if (! (v instanceof type)) {
            throw new TypeError("error type!");
        }
        setter(v);
    }
}
class g {
    _a= null
    @Validate
    @Reflect.metadata('type', a)
    set h(v: any) {
        this._a = v;
    }
    get h() {
        return this._a;
    }
}

new g().h = 1234; // err! 29:13:  error type!
