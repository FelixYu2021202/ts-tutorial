export * as Animal from "./animal"; // this line is shortened(it called re-export) it should be:
/*
import * as Animal from "./animal";
export default Animal;
*/
import Zoo from "./zoo"; // this is the class Zoo
import * as ZooTools from "./zoo"; // this is the other objects, such as class Park, class Guard, and 'default' for class Zoo

export default function zooOpener(name: string) {
    return new Zoo([new ZooTools.Park(new ZooTools.Guard())], [new ZooTools.Guard()], name);
}
