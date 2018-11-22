function sayHello() {
    console.log('-----------------------');
    console.log('hello!');
    console.log('-----------------------');
}

// sayHello();
// a = sayHello;
// a();

function sayHello(name) {
    console.log('-----------------------');
    console.log('hello ' + name);
    console.log('-----------------------');
}

//sayHello('Joe');

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(1000);
console.log(tax);