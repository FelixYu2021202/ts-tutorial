declare module "HelloWorld" { // this is an ambient module, you can't just use it, but you can get the variables inside like "import { SayHello } from "HelloWorld";"
    export function SayHello(): void;
    export function helloworld(): void;
}