let aString = 'The 2001 BMW 750iL is a special car -- and I think it\'s the most beautiful luxury sedan ever. Today.';

let mySlice = aString.slice(13,18);
console.log(mySlice);

let mySubstr = aString.substr(13, 5);
console.log(mySubstr);

console.log(aString.endsWith('day.'));
console.log(aString.startsWith('The'));
console.log(aString.includes('most'));
console.log(mySubstr.repeat(3));