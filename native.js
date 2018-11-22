let myString = new String('howdy'); // Native 

console.log(myString);
console.log(myString.toString());
console.log(typeof myString);

/* LIST OF NATIVES
    String()
    Number()
    Boolean()
    Object()
    Function()
    Symbol()
*/

 /* LIST OF PRIMITIVES
    number
    string 
    boolen
    function
    object
 */


 let myPrimitive = 'This is crazy';
 // JS is wraping the primitive into a String native and after that it's called the method toLowerCase();
 myPrimitive = myPrimitive.toLowerCase();  


 let myNumber = new Number(7);
 console.log(typeof myNumber);
 let myPrimitive2 = myNumber.valueOf();
 console.log(typeof myPrimitive2);