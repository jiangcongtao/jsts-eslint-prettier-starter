class Car {
    name: string;
    constructor(name: string) {
        console.log('created object with name: ' + name);
        this.name = name;
    }

    getName() {
        console.log('Name is : ' + this.name);
        return this.name;
    }

    drive() {
        console.log(`Car [${this.name}] is driving`);
    }
}

class SportsCar extends Car {
    constructor(name: string) {
        super(name);
        console.log('SportsCar');
    }
}

let car: Car = new Car('Benz');
car.drive();
let scar: SportsCar = new SportsCar('Sports Benz');
scar.drive();
console.log('Completed');
