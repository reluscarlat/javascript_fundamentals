// Declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '745li', 2010);
myCar.print();

class SportCar extends Car {
    revEngine() {
        console.log('Vrooom goes the ' + this.model);
    }
}

let mySportCar = new SportCar('Dodge', 'Viper', 2011);
mySportCar.print(); 
mySportCar.revEngine();