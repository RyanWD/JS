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

  --------
// making Objects, objects can contain arrays
  // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  
  name: 'poopy',
  legs: 2,
  tails: 6,
  friends: ['ryan','adele']
  
};

--------
// accessing object properties can be done two ways. '.' notation if you know the property name or the property had a space in the name, use [] 
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

-------
// using bracket notation to locate the object properties 
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj['an entree'];   // Change this line
var drinkValue = testObj['the drink'];    // Change this line

-----

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line


----------
// object property collected dynamically using a function. 
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop"; 
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

--------
// changing object properties using [] or . notation 
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = 'Happy Coder'

-------
// adding new properties to an object.
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.bark = 'woof' 

------

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;


------
// whichever string is put into val is looked up in the object.
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie":"Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

-------
// using .hasOwnProperty keyword to check if a property exists in an object.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  } else {
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");

-------
// adding a new object to an array, which also includes another array
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Soup",
    "title": "is hot",
    "release_year": 1990,
    "formats": [
      "tape",
      "vhs",
      "cd"
    ]
  } // Add record here
];


-----------
//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //  Change this line


-------
// how to access a nested array
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line


-----
// record collection test - check for certain properties, if they're not found add the new ones.
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if (id && prop === "tracks" && value !== "") {
if (collection[id][prop]) {
  collection[id][prop].push(value);
}
else {
  collection[id][prop]=[value];
}
} else if (value !== "") {
  collection[id][prop] = value;
}
else {
  delete collection[id][prop];
}

return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

-----
// using while loops
// Setup
var myArray = [];

// Only change code below this line.

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

-----

// for loops
// for ([initialization]; [condition]; [final-expression])

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 6; i++) {
    myArray.push(i)
}

------
// incrementing by 2 rather than the standard i++
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray.push(i)
}

-------
// looping down
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

-----
// using an embedded for loop to loop through an inner array and multiply them altogether. 
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


-----
// using a do while loop. The code will run atleast once.
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
myArray.push(i);
  i++;
} while (i < 5);

------

//Setup
// Using a for loop to find properties in an array

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];



// Only change code below this line

function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
if (contacts[i].firstName === name) {
 if (contacts[i].hasOwnProperty(prop)) {
 return contacts[i][prop];
 } else  {
return "No such property";
} 
}
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

------

// using Math.random to return a random number between 0-1

function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}


-----

// using the Math.floor function to round down to a whole number. 


var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // returns a number between 0-19
// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.


function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10); // reuturns a number between 0-9
}


--------
// using min - max to set min/max limits to Math.random 
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
} 

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

-------

//using the function parseInt() to convert a string into a number 
function convertToInteger(str) {
  return parseInt(str) 
  }
  
  convertToInteger("56");


  ------
//parseInt(string, radix); The radix can be an integer between 2 and 36.
//
  function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011"); // converts to binary 

  ------
  // Ternary operator
// single line if else statement syntax -> "condition ? statement-if-true : statement-if-false;"
  function checkEqual(a, b) {
    return a === b ? true : false;
  }
  
  checkEqual(1, 2);


  ------
// an easier way to write if, else if, else statements.
  function checkSign(num) {
    return (num > 0) ? "positive" : (num === 0) ? "zero" : "negative";
  }
  
  checkSign(10);


  ---------------------------------------------------------------
  ---------------------------------------------------------------
  ---------------------------------------------------------------
  ---------------------------------------------------------------
  ----------------------------  ES6  ----------------------------
  ---------------------------------------------------------------
  ---------------------------------------------------------------
  ---------------------------------------------------------------
  ---------------------------------------------------------------


  // ES6 may not work in all browsers, since it was only released 2015

  ---------
// using let instead of var. It will throw up an error if the let is reasigned in the code.

  let catName;
  let quote;
  function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

  }
  catTalk();


  -----

  function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
// results below
    checkScope();
    Block scope i is:  block scope
    Function scope i is:  function scope
    "function scope"


    -------

    // where declaring a const it's common practice to use caps
    function printManyTimes(str) {
      "use strict";
    
      // change code below this line
    
      const SENTENCE = str + " is cool!";
      for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
      }
    
      // change code above this line
    
    }
    printManyTimes("freeCodeCamp");


    -------
// const arrays and objects can still be manipulated, but you cannot use the variable identifier s to point to a different array using the assignment operator.
    const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // change code above this line
}
editInPlace();

--------

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


--------
// arrow function replaces the use of an anonymous function.

const magic = () => {
  "use strict";
  return new Date();
};


--------
// using arrow functions with parameters 
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));