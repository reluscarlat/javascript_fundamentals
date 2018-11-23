let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model +'\n');
    }
}

car.printDescription();

car.color = 'red';
console.log(car);