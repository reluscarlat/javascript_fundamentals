let pattern = /xyz/;

console.log(typeof pattern);

let value = 'abc xyz def';

console.log(pattern.test(value)); 

console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));