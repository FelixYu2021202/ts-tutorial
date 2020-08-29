declare module JSX {
    interface ElementChildrenAttribute {
        children: {};
    }
    interface ElementAttributesProperty {
        props: any;
    }
}

function Floating(descriptor: {children: {}}) {
    return <div up={innerHeight/100}>{descriptor.children}</div>
}

<Floating>
    <Floating>
    </Floating>
</Floating>
