function sayHello(name) {
    return function() {
        console.log('howdy '+name);
    }
}

let bob = sayHello('bob');
let joe = sayHello('joe');
let tim = sayHello('tim');

bob();
joe();
tim();