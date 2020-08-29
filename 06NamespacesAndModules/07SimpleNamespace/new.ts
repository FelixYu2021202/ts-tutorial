namespace Events {
    export interface Evt {
        type: string;
        data: any;
    }
    export function checkMessageEvent(event: Evt) {
        return event.data as string;
    }
    export function checkSendEvent(event: Evt) {
        return event.data as XMLHttpRequest;
    }
    export function checkResponseEvent(event: Evt) {
        return event.type + 'Res' + event.data;
    }
    export function checkLogEvent(event: Evt) {
        return 'Log event ' + event.type + ': ' + event.data;
    }
    // .. a lot of different checkEvent, at least, it's ok
}
let a: Events.Evt; // it's organized
Events.checkMessageEvent(a);
// ...