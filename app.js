/****** Exercise 1 ******/
console.log("****** EXERCISE 1 ******");
console.log('');

var calc = require('./calculator');

var x = 5;
var y = 10;

console.log("Adding: " + x + " + " + y + " = " + calc.add(x, y));
console.log("Subtracting: " + x + " - " + y + " = " + calc.subtract(x, y));
console.log("Multiplying: " + x + " * " + y + " = " + calc.multiply(x, y));
console.log("Dividing: " + x + " / " + y + " = " + calc.divide(x, y));

console.log('');



/****** Exercise 2 ******/
console.log("****** EXERCISE 2 ******");
console.log('');

var colors = require('./node_modules/colors/lib/index');

console.log("First some yellow text".yellow);

console.log("Underline that text".yellow.underline);

console.log("Make it bold and red".red.bold);

console.log(("Double Raindows All Day Long").rainbow);

console.log("Drop the bass".trap);

console.log("DROP THE RAINBOW BASS".trap.rainbow);


console.log('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported

console.log('So '.green + 'are'.underline + ' ' + 'inverse'.inverse + ' styles! '.yellow.bold); // styles not widely supported
console.log("Zebras are so fun!".zebra);

//
// Remark: .strikethrough may not work with Mac OS Terminal App
//
console.log("This is " + "not".strikethrough + " fun.");

console.log('Background color attack!'.black.bgWhite);
console.log('Use random styles on everything!'.random);
console.log('America, Heck Yeah!'.america);

console.log(''.reset);  //Reset the console color