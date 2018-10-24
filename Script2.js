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


  ------

// Setup - loosely not equal 
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);
  

  ------

  // Setup - strictly not equal
function testStrictNotEqual(val) {
    // Only Change Code Below this Line
    
    if (val !== 17) {
  
    // Only Change Code Above this Line
  
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testStrictNotEqual(10);

  ------

// greater than >
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);

  ------

  // great than or equal to >=
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);


------

// less than < 
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
    
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Change this value to test
  testLessThan(10);


  ------

  // smaller than or equal to <= 
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Change this value to test
  testLessOrEqual(10);
  

  -------
// && operator both operands to the left and right must be true
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {

        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);

  -----

// like && but || means 'or', only one statement needs to be true.

  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);


  ------
// using else. if the 'if' statement is false, else is executed.
  function testElse(val) {
    var result = "";
    // Only change code below this line
    
    if (val > 5) {
      result = "Bigger than 5";
    }
    
    else {
      result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  testElse(4);
  

  -----
// using multiple 'if' statements with 'if else'
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
  }
  
  // Change this value to test
  testElseIf(7);
  
  --------

// putting if statements in logical order.
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  orderMyLogic(4);

  -------

// chaining if / if else statements.
  function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
      return "Small" 
    } else if (num < 15) {
      return "Medium"
    } else if (num < 20) {
      return "Large"
    } else {
      return "Huge"
    }
    // Only change code above this line
  }
  
  // Change this value to test
  testSize(7);

  ------

  // golf game - a good example of using multiple if else statements
  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par-2) {
return names[1];
  } else if (strokes == par-1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par+1) {
    return names[4];
  } else if (strokes == par+2) {
    return names[5];
  } else {
    return names[6];
  }

  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

------

// with lots of options to choose from. A switch is good to use. a break is needed or it will auto run to the next case.
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
    case 1: 
    return "alpha"
    break;
    case 2:
    return "beta"
    break;
    case 3: 
    return "gamma"
    break;
      case 4: 
    return "delta"
    break;
    }
    
    // Only change code above this line  
    return answer;  
  }
  // Change this value to test
  caseInSwitch(1); 
  

  ------

  // case statements but with a default, similar to else statement, if none of the case statements are met.
  function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
      case "a":
      return "apple"
      break
       case "b":
      return "bird"
      break
       case "c":
      return "cat"
      break
      
      default:
      return "stuff"
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  switchOfStuff(1);
  

  -----


  // similar to the || when using 'if' removing the break, all cases will fire until a break is met.
  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
  case 1:
  case 2:
  case 3: 
  return "Low"
  break;
  case 4:
  case 5:
  case 6: 
  return "Mid"
  break
  case 7:
  case 8:
  case 9: 
  return "High"
  
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  sequentialSizes(1);
  

  function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch(val) {
    case "bob":
    answer = "Marley";
    break
   case 42:
    answer = "The Answer";
    break
   case 1:
    answer = "There is no #1";
    break
   case 99: 
    answer = "Missed me by this much!";
    break
  case 7:
    answer = "Ate Nine";
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);


-------

// replacing strict equal statements with cases. 
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    
    switch(val) {
      case "bob":
      answer = "Marley";
      break
     case 42:
      answer = "The Answer";
      break
     case 1:
      answer = "There is no #1";
      break
     case 99: 
      answer = "Missed me by this much!";
      break
    case 7:
      answer = "Ate Nine";
    }
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  chainToSwitch(7);
  

  -----

// returning boolean values using equality operator 
  function isLess(a, b) {
    // Fix this code
  return a < b;
  }
  
  // Change these values to test
  isLess(10, 15);

  ----

  // using the return keyword to stop a function once a statement has been reached.
  // Setup
function abTest(a, b) {
    // Only change code below this line
    
    if (a < 0 || b < 0){
    return undefined
    }
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2,2);

-------

// counting cards blackjack game.

var count = 0;

function cc(card) {
  // Only change code below this line
  var Bet = 1;
if (card >= 2 && card <= 6) {
  count++;

} else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
count--;

}

if (count >= Bet) {
return count + " Bet";

} else {

  return count + " Hold"
}

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');


-----
// an alternative cleaner version of the blackjack game above.

function cc(card) {
    // Only change code below this line
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    if (count > 0){
      return count + " Bet";
    } else {
      return count + " Hold";
    }
    // Only change code above this line
  }