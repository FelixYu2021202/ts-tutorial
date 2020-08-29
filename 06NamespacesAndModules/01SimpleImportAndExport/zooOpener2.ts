import type { Animal } from './animal'; // type import, only types can be imported and it can only used as types
import Zoo, { Park, Guard } from './zoo';
import { Birds } from './animal';
import './zooOpener'; // side effect, things inside it will be run but no exports can be use here

export default function zooOpenerExpert(parks: number, guards: number, guardsPerPark: number, birds: number, name: string) {
    function openPark() {
        let park = new Park();
        for (let i = 0; i < guardsPerPark; i++) {
            park.addGuards(new Guard());
        }
        for (let i = 0; i < birds; i++) {
            park.addAnimals(new Birds("bird") as Animal);
        }
        return park;
    }
    let zoo = new Zoo([], [], name);
    for (let i = 0; i < parks; i++) {
        zoo.parks.push(openPark());
    }
    for (let i = 0; i < guards; i++) {
        zoo.keepers.push(new Guard());
    }
    return zoo;
}
