//UDEMY + MISC JS TRAINING - AFTER 6 MONTH BREAK

var questions = prompt('Whats your name?');

// 5 PRIMITIVE DATATYPES 

// NUMBERS (ANY NUMBERS)
4
9.3
-10

// STRINGS
"HELLO WORLD"
"43"

// BOOLEANS 
TRUE OR FALSE 

// NULL AND UNDEFINED 
null
undefined

// 

------- NUMBERS --------

MODULO = REMAINDER OPERATOR 

10 % 3 = 1 
5 % 5 = 0

------- STRINGS ---------


DOUBLE AND SINGLE QUOTES BOTH OKAY

"HELLO" AND 'HELLO'

"HELLO" + 'HELLO' = "HELLOHELLO"

"SHE SAID \"GOODBYE!\" TO HIM" =  "SHE SAID "GOODBYE!" TO HIM" // BACKSLASH MUST BE BEFORE THE QUOTATION MARK

"HOW MANY LETTERS AND SPACES ARE IN THIS STRING".length = 46

"HOW MANY LETTERS AND SPACES ARE IN THIS STRING"[5] = "A"


----- ARRAYS ---------

// Setup - selecting an array within an array
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1]; // = 8

-------

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup - pushing parameteres into an array
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.

myArray.push(["dog", 3])


-------

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup - popping off the final value in array and storing in a variable
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();


-------

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup - shift is the same as pop() but removes the first value
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

// unshift(["cat", 22]) like push but to the front of the list

------

//shopping list

var myList = [["banana", 5], ["apple", 7], ["grapes", 3], ["strawberries", 9], ["cereal", 12]];

-------

// Example - creating functions..
function ourReusableFunction() {
    console.log("Heyya, World");
  }
  
  ourReusableFunction();
  
  // Only change code below this line
  
  function reusableFunction() {
  console.log("Hi World")
  
  }
  
  reusableFunction();


  ------

  // Example - passing values into functions with arguements
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5
  
  // Only change code below this line.
  
  function functionWithArgs(a, b)  {
  console.log(a + b)
  }
  
  functionWithArgs(1, 2); // =3
  functionWithArgs(7, 9); // =16
  
  --------
// global scope - if a var isn't used, the keyword can be used by other functions unintentionally 
  // Declare your variable here

var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

----------

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = "sup"
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log(myVar); // Only removing this console log line will work
  
---------

// Setup - the same var can be used globaly and locally, but the local var will always take precedence
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();
  
--------

// Example
function minusSeven(num) {
    return num - 7;
  }
  
  // Only change code below this line
  
  console.log(minusSeven(10));
  
  function timesFive(num) {
  
  return num * 5
  
  }
  
  console.log(timesFive(5));
  console.log(timesFive(2));
  console.log(timesFive(0));


  -------

  // Example - sum equals 8 here, but the return value is undefined.
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
sum += 5
}

// Only change code above this line
var returnedValue = addFive();

-------

// Example - assignments with a return value, and storing that value in a var.
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Only change code below this line


-------

function nextInLine(arr, item) {
    // Your code here
    arr.push(item)
    var removed = arr.shift()
    
  return removed;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

  nextInLine(testArr, 10), console.log(testArr); // whatever is called here defines the function


  -------

  // Setup - boolean statements using 'if'
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
    
    
    // Only change code above this line.
  
  }
  
  // Change this value to test
  trueOrFalse(true);

  -------

  // Setup - equality practice, '===' strict must match completely 'no coercion'
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  compareEquality(10, "10");