let hi = (name) => { console.log(`howdy ${name}`); }
hi('Joe');

let add = (a, b) => {
    return a + b;
}
//console.log(add(3,4));

let names = ['david', 'eddie', 'alex', 'michael'];
// names.map( (name) => { console.log(`howdy ${name}`);} );

/* let i = 0;
names.map((name) => { i++; console.log(`howdy ${name} ${i}`); }); */

let transformed = names.map((name) => { return `howdy ${name}!` });
console.log(names + '\n\n');
console.log(transformed);
