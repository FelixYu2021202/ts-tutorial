export class Animal { // ts uses keyword 'export' to export things
    constructor(public name: string, public type: string) { }
}

class Bird extends Animal {
    constructor(name: string) {
        super(name, 'bird');
    }
    fly(meters: number) {
        console.log(`${this.name} has started to fly`);
        console.log(`...`);
        console.log(`${this.name} has flied ${meters} meters`);
    }
    layEgg() {
        return {
            born(name: string) {
                return new Bird(name);
            }
        }
    }
}

class Fish extends Animal {
    constructor(name: string) {
        super(name, 'fish');
    }
    swim(meters: number) {
        console.log(`${this.name} has started to swim`);
        console.log('...');
        console.log(`${this.name} has swum ${meters} meters`);
    }
    layEgg() {
        return {
            born(name: string) {
                return new Fish(name);
            }
        }
    }
}

export { Fish }; // ts can also use the export statemant to export things

export { Bird as Birds }; // we can make aliases when export things
