import { log } from "console"; // ts use import statements to import things from other modules
import * as Animals from "./animal"; // we can also import '*' to import all the things in the other modules

log('a zoo is ready to open!'); // function 'log' is imported from 'console', so it's same as console.log

export default class Zoo { // default exports, when import it, use 'import Zoo from "./zoo.ts"' not 'import { Zoo } from "./zoo.ts"'

    constructor(public parks: Array<Park>, public keepers: Array<Guard>, public name: string) {}

}

export class Park { // normal exports won't combine together with the default export

    guards: Array<Guard>;
    animals: Array<Animals.Animal>

    constructor(...animalsOrGuards: Array<Animals.Animal | Guard>) {
        for (let i = 0; i < animalsOrGuards.length; i++) {
            if (animalsOrGuards[i] instanceof Guard) {
                this.guards.push(animalsOrGuards[i] as Guard);
            } else {
                this.animals.push(animalsOrGuards[i] as Animals.Animal);
            }
        }
    }

    addAnimals(...animals: Array<Animals.Animal>) {
        this.animals.push(...animals);
    }
    addGuards(...guards: Array<Guard>) {
        this.guards.push(...guards);
    }

}

export class Guard {

    whistle() {

        log('bibi-bi!');

    }

}
