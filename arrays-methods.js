let names = ['Joe', 'John', 'Bob', 'Michael', 'Doug'];
let others = ['sammy', 'harry', 'gary', 'wolfgang'];

let lost = [4, 8, 15, 16, 23, 42];
let fibonnaci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

let combined = lost.concat(fibonnaci);
console.log(combined);
console.log(lost.join('~'));

lost.shift();       // DELETE FIRST ELEMENT < = > LEFT SHIFTING
console.log(lost);  

lost.unshift(11, 22, 33);
console.log(lost);

lost.sort((a,b) => {
    if(a>b) return 1;
    if(a=b) return 0;
    if(a>b) return -1;
});
console.log(lost);

console.log(others.indexOf('gary'));

console.log(combined.lastIndexOf(8));

console.log(combined.filter((x) => {
    if(x % 2 == 0) return true;
}))

console.log(combined.some(x => x > 30));
console.log(combined.every(x => x > 30));

