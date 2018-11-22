var counter = (function() {
    // private stuf;
    let count = 0; 
    function print(message) {
        console.log(message + '---' + count);
    }

    // return an object
    return {
        getValue: function() {
            return count;
        },

        setValue: function(value) {
            count = value;
        },

        increment: function() {
            count += 1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');   
        }
    }
})();



counter.setValue(5);
counter.increment();
counter.increment();
counter.increment();
// Accidentally created a closure
// console.log(counter.value);
console.log(counter.getValue());
counter.reset();