let a = [4, 8, 15, 17, 23, 42];
let b = ['john', 'doe', 'alex', 'michel'];
let c = [1, 'john', true];

console.log(typeof a);
console.log(a[1]);
console.log(c[5]);

a.push(111);
for( let i = 0; i < a.length; i++) {
    if(a[i] == 17) {
        a.splice(i,1);
    }
}
console.log(a);
