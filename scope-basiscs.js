let a ='first';

function scopeTest() {
    console.log(a);
    a = 'changed';
}

scopeTest();

console.log(a);
//console.log(b);
