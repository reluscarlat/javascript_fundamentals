let name = 'bob';
console.log(`hi ${name}`);

let sentence = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Ut vero enim, blanditiis sequi exercitationem 
saepe similique accusantium repellat nobis natus. 
Voluptate ipsum perspiciatis omnis harum saepe 
recusandae veniam iure ipsam?`;

console.log(sentence);

function getReasonCount() {
    return 1;
}

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one reason' : 'a few reasons'} to try this.`;

console.log(interpolation);