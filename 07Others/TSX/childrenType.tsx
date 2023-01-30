declare module JSX {
    interface ElementChildrenAttribute {
        children: {}; // the name
    }
    interface ElementAttributesProperty {
        props: any;
    }
}

function Floating(descriptor: { children: {} }) {
    return <div up={innerHeight / 100}>{descriptor.children}</div>
}

{/* <Floating></Floating> // err: children typed null */ }

<Floating>
    { }; {/* ok, children typed {} */}
</Floating>;

<Floating>
    <Floating>
        { }; {/* ok, children typed Floating */}
    </Floating>
</Floating>
