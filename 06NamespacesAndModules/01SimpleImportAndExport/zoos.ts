import opener from "./zooOpener2"; // when import an default value, you can make any aliases you want

export default { // default exports can be just any values
    zoo1: opener(10, 5, 3, 10, "Bird Zoo"),
    zoo2: opener(5, 2, 2, 5, "Sight Seeing Zoo")
}