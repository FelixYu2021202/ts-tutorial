declare module JSX {
    interface ElementAttributesProperty {
        properties: any; // the name
    }
}

class Widget {
    properties: {
        leftClamp: number;
        rightClamp: number;
        upClamp: number;
        downClamp: number;
        width?: number;
        height?: number;
    }
}

<Widget leftClamp={10} rightClamp={20} upClamp={30} downClamp={0} /> // ok
{};
<Widget leftClamp={10} rightClamp={20} upClamp={30} downClamp={0} width={100} height={250} /> // ok
{};
{/* <Widget rightClamp={20} upClamp={30} downClamp={0} width={100} height={250} /> */} // err: leftClamp is missing
{};
{/* <Widget leftClamp={10} rightClamp={20} upClamp={30} downClamp={0} width={100} height={250} hello={1234} /> */} // err: unknown property hello
{};
<Widget leftClamp={10} rightClamp={20} upClamp={30} downClamp={0} width={100} height={250} hello-there={1234} /> // ok: hello-there is not a valid identifier so compiler doesnt' care

// spread operator

let properties = new Widget().properties;

<Widget {...properties} />; // works
