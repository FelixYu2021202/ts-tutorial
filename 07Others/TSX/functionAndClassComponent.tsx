declare module JSX {
    interface IntrinsicElements {
        [elementName: string]: any; // polyfill for other elements
    }
    interface Element {
        name: string;
        x: number;
        y: number;
    }
}

interface Positional extends JSX.Element {
}

declare function Comp(d: Positional): JSX.Element;
function PositionalComp(d: Positional) {
    return < Comp name={d.name} x={d.x} y={d.x} />;
}
let positioned = PositionalComp({name: "positioned", x: 10, y: 10});

class ClassComp {
    name = "CCInstance";
    x = 50;
    y = 50;
}

< ClassComp /> // ok
