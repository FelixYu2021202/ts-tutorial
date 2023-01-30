interface Evt {
    type: string;
    data: any;
}
function checkMessageEvent(event: Evt) {
    return event.data as string;
}
function checkSendEvent(event: Evt) {
    return event.data as XMLHttpRequest;
}
function checkResponseEvent(event: Evt) {
    return event.type + 'Res' + event.data;
}
function checkLogEvent(event: Evt) {
    return 'Log event ' + event.type + ': ' + event.data;
}
// .. a lot of different checkEvent, it's such a mess! so we can use namespaces to make it clearer

let a: Evt = { type: "Evt", data: "Evt" };
checkMessageEvent(a);
// ...
