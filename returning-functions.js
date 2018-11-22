/*  ---------  DON'T DO THIS:  ---------
var myVariable = 'I am at the global scope';

var myFunction = function() {
    console.log('I am at the global scope');
}
*/
function two() {
    return function(){
        console.log('two');
    }
}

let myFunction = two();
myFunction();

// --------------------------------------
function three() {
    return function(){
        return 'three';
    }
}

console.log(three()());

