let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model)
    }
}


 function first() {
     return this;
 }

console.log(first() === global);

function second() {
    'use strict';
    
    return this;
}

console.log(second() === undefined); 
 
 let myObject = {value: 'My Object'};

 // value is set on the global object
 global.value='Global object';

 function third() {
     return this.value;
 }

// !!!! -------------- "this" keyword depends on how the function is called. --------------------- !!!!
// function(anObjectScope); change the scope to the object seted as parameter

 console.log(third.call(myObject));

 function third(name) {
    return this.value + ' ' +name;
}

console.log(third.call(myObject,'Bob')); 

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}

customer1.print.call(customer2);
customer2.print();