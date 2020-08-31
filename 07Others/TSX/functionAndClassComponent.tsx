declare module JSX {
    interface IntrinsicElements {
        [elementName: string]: any; // polyfill for other elements
    }
    interface Element { // use JSX.Element to define the type of each element
        name: string;
        x: number;
        y: number;
    }
}

interface Positional extends JSX.Element {
}

declare function Comp(d: Positional): JSX.Element; // this is a function component, just need it to return an JSX.Element type
function PositionalComp(d: Positional) {
    return < Comp name={d.name} x={d.x} y={d.x} />;
}
let positioned = PositionalComp({name: "positioned", x: 10, y: 10});

class ClassComp { // this is a class component, only allowed when it's assignable to JSX.Element
    name = "ClassComponentInstance";
    x = 50;
    y = 50;
}

let a = < ClassComp /> // ok

a.x = 1234;
