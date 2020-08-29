declare module JSX {
    interface IntrinsicElements {
        show: any;
    }
}
<show />; // ok
{/* <hide />; */} // err: hide doesn't exist on type IntrinsicElements