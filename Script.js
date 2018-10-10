//UDEMY JS


//BEGINNER PRACTICE

var userName = prompt("what is your name?");
alert("Nice to meet you, " + userName);
console.log("Also great to meet you, " + userName); 

var firstName = prompt("What is your First name?");
var lastName = prompt("and your Last name?");
var Age = prompt("May I ask your age?");
console.log("Your full name is " + firstName + " " +lastName);
console.log("You're " + Age + " " + "years old");

var age = prompt("What is your age?");
const ageMin = 18;
const ageMax = 21;

if (age < ageMin) {
alert("Sorry you cannot enter")
}

else if ((age >= ageMin) && (age < ageMax)) {
alert("You may enter, but cannot drink")
}

else { alert("You may enter") } 



var secretNumber = 11;
var guess = Number(prompt("Guess a number")); 

// or // 

var secretNumber = 11;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


if (guess === secretNumber) {
alert("that's a bingo!");
}

else if (guess < secretNumber) {
alert("a little higher, guess again");

}

else { alert("lower yo, guess again");

     }


// MODUL PRACTICE

var num = 1

while(num <= 20) {    
if(num % 4 === 0) {  /* MOD is what's left over when 
                       that number is divded eg.
                       1 / 4 = 4
                       2 / 4 = 2
                       3 / 4 = 1
                       4 / 4 = 0

                                               */
console.log(num);
} 
num++;
}

 4
 8
 12
 16
 20


 // practice 1

 var i = -10;

while (i <= 19) {
console.log( i );
i++;
}

// practice 2

var i = 10;

while (i <= 40) {
if (i % 2 === 0) {
console.log( i );
}
i++;
}

// practice 3

var i = 300;

while (i <= 333) {
if (i % 2 === 1) {
console.log( i );
}
i++;
}

// practice 4 

var i = 5;

while (i <= 50) {
if ((i % 3 === 0) && (i % 5 === 0)) {
console.log( i );
}
i++;
}

// YDKJS Phone practice

const phone = 100.50;
const phoneAcc = 11.75;
const moneySpend = 1000.00;
const tax = 0.20;

var bank = prompt("Insert bank balance");
var bankBalance = Number(bank);
var bundleCounter = 0;
var phoneCounter = 0;
var amount = 0;


function calculateTax(amount) {

    return amount * tax;
}

function formatAmount(amount)  {

    return "$" + amount.toFixed( 2 );
}

while (amount < bankBalance) {

    amount = amount + phone;
   

    if (amount < moneySpend) {
        amount = amount + phoneAcc;
        bundleCounter++;
    }
    else  {
        phoneCounter++;
    }
}

amount = amount + calculateTax( amount );

console.log("your purchase of " + bundleCounter + " bundles, and " + phoneCounter + " single phones, comes to " + formatAmount(amount));

if (amount > bankBalance) {
    console.log("you can't afford anymore");

}



// total price of your phone purchase
// keep purchasing phones until you run out of money
// After you’ve calculated your purchase amount, add in the tax
// check the amount against your bank account balance to 
// see if you can afford it



// V1
var answer = prompt("are we there yet?");


while (answer !== "yes" && answer !== "yea") {
    var answer = prompt("are we there yet?");
}


    alert("YAY");

 //V2 indexOf - starts counting at the first letter of the word.
var answer = prompt("are we there yet?");


while (answer.indexOf("yea") === -1) {
    var answer = prompt("are we there yet?");
}


    alert("YAY");



// YDKJS Phone practice (refresher)

    const phone = 100;
    const phoneAcc = 5;
    const moneySpend = 1000.00;
    const tax = 0.20;
    
    var bank = prompt("Insert bank balance");
    var bankBalance = Number(bank);
    var bundleCounter = 0;
    var phoneCounter = 0;
    var amount = 0;

    function FormatAmountTwo(amount) {

       return "£" + amount.toFixed(2);

    }

    function StringAmountTwo(amount) {

        return amount = amount * tax;

    }

    while (amount < moneySpend) {

        amount += phone;
       

      if (amount < moneySpend) {

        amount += phoneAcc;
        bundleCounter++;
      }
      else { 
          phoneCounter++;
      }
    }

    amount = amount + StringAmountTwo(amount);

    console.log("Your order of " + bundleCounter + " bundles and " + phoneCounter + " phones, comes to a total of " + FormatAmountTwo(amount));

    if (moneySpend <= bankBalance && moneySpend >= amount) {

        console.log("Great! i'll take them")
    }

    else {
        console.log("ahhh, I can't afford it")
    }

// LOOPS

    for (var i = 0; i < 6; i++) {
        console.log(i);
    }

    var str = "RyanWD"

    for (var i = 0; i < str.length; i++) {
        console.log(str[i])
    }

   

    // for loop practice 1
for (var i = -10; i <= 19; i++) {
    console.log(i);
}

    // for loop practice 2
for (var i = 10; i <= 40; i++) {
if (i % 2 === 0) {

    console.log( i );
}
    }

    // for loop practice 3
    for (var i = 300; i <= 333; i++) {
        if (i % 2 === 1) {
        
            console.log( i );
        }
            }

            // for loop practice 4
    for (var i = 5; i <= 50; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i);
        }
    }


// function practice 1

function codeWord(x,y) {
    return x * y;
}

codeWord(10, 12);

// 2

function codeWord2(x) {
    return 2*x; // return immediately ends a function.
    console.log(x);
}

codeWord2(7);

// function test 1

function test1(even) {
    if (even % 2 === 0) {
    return true;
    }
    return false;
}

test1(2);
// function test 1 - quicker way

function even(numba) {
    return numba % 2 === 0;
}

// test 2 fail (from net)

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);

// test 2 practice 

function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


  // test 3 (.replace(/toReplaceHere/, "replacementHere"))

  function snake(words) {
      var adapt = words.replace(/-/g, "_"); // g = global
      return adapt;
  }

  snake("my-bad-ffs-lame-ass-gypoooo----------");


 //ARRAY PRACTICE (SHOPPING LIST)

 var todos = ["buy turtle"];
 var input = prompt("What would you like to do");
 
 
 while (input !== "quit") {

 
 if (input === "list") {
listTodos();
 }
 else if (input === "new") {
 addTodos();
 }
 else if (input === "delete") {
   deleteTodos();
    }
  input = prompt("What would you like to do");

 }
console.log("YOU QUIT");

function listTodos(){
console.log("**************")
todos.forEach(function(todo, i){
 console.log(i + ": " + todo);
 });
console.log("**************")
}

function addTodos(){
var newInput = prompt("enter a new todo");
todos.push(newInput);
console.log(newInput + " has been added to the list");
}

function deleteTodos(){
 var removeIt = prompt("What item would you like to delete?");
 todos.splice(removeIt,1);
 console.log("You just removed list item number " + removeIt + " from your list");

}

// ABOUT forEACH
/*
.forEach takes a callback function, 
that callback function is expected to have at least 1, 
but up to 3 arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array 
(per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on 
(it will be the same for every iteration of the loop).

You have a couple options when calling .forEach on an array:

You can pass in an anonymous function:

[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});

Or you can pass in a pre-written, named function.

function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);
Notice how in the second example we don't invoke logNums 
when passing it into .forEach? We simply pass in the 
function name. We don't need to invoke the logNums function, 
.forEach does that for us. In fact, it invokes 
the function multiple times, once for every element 
inside of the array.

*/




var colors = ["red", "yellow", "green"]

for (var i = 0; i <= colors.length; i++) {
    console.log(colors[i])
}



var colors = ["red", "green", "blue"];

colors.forEach(function(namez){
console.log(namez);
});


// ARRAY TEST 1 //

/*var array = [1,2,3,4,5,6];*/ 
var array = ["a", "b", "c"];


function printReverse() {
for (var counter = array.length - 1; counter >= 0; counter--){
console.log(array[counter]);
}
};
    
    printReverse(); 
// OR with .forEach
var array = ["a", "b", "c"];
var counter = array.length - 1;

array.forEach(function(wtf) {
console.log(array[counter]);
if (counter >= 0)
counter--;
});



// ARRAY TEST 2 //

var array = ["a","a","a","a", 6, 7];
var answer = true;

function test (){
array.forEach(function(theNumbers) {
var compare = array[0]
if (compare !== theNumbers) {
answer = false;
}
});
console.log(answer);
}

test();


// ARRAY TEST 3 //

var numberArray = [5,100,6,7];
var result = 0;

numberArray.forEach(function(numb) {
result += numb;

});
console.log(result);

// ARRAY TEST 4 //


var numberzArray = [1,2,3,20,5];
var max = 0

numberzArray.forEach(function(nani) {
if (max < nani) {
    max = nani;
}
});
console.log(max);

// ARRAY TEST 1 ANSWER //

function printReverse(arr) {
    for (var counter = arr.length - 1; counter >= 0; counter--){
    console.log(arr[counter]);
    	}
    };
        
        printReverse([1,3,6,9]); 

// ARRAY TEST 2 ANSWER // 
// THE REASON .forEach is not used, is because 
// it creates a 2nd function, so it returns the outer 
// value (return true)

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
    }
    
    isUniform([1,1,1,1]);

    // USE ABOVE ITERATION FOR THIS EXERCISE //
    function isUniform(arr) {
        var first = arr[0];
        arr.forEach(function(element) {
            if(element !== first) {
                return false;
            }
        });
        return true;
        }
        
        isUniform([1,2,1,1]);



// ARRAY TEST ANSWER 3 


function sumArray(arr) {
    var result = 0;
    arr.forEach(function(numb) {
    result += numb;
    
    });
    return result;
    }
    
    sumArray([5,15,5]);

// ARRAY TEST ANSWER 4 

function mathYo(arr) {
    var max = 0
    arr.forEach(function(nani) {
    if (max < nani) {
        max = nani;
    }
    });
    return max;
    }
    
    mathYo([5,10,11,7]);

// TAKEAWAY NOTES FROM TEST. 
// WRAP SNIPPETS LIKE ABOVE IN FUNCTIONS
// AND PUT THE NUMBERS INTO THE BRACKETS WHEN CALLING
// THE FUNCTION. RATHER THAN DEFINING IN A VAR AT 
// TOP OF PAGE.


// OBJECTS

//NO ORDER IN OBJECTS, ALL IN TOGETHER

var person = {
    name: "Ryan" , 
    age: 31,
    city: "Tokyo"
    };
    
    // console.log(person[ "name" ]);
    // OR
    console.log(person.age);

//TO UPDATE AN OBJECT

person.age += 1;

person["city"] = "London";
"London"   


// Hopelessly failing at below task.
function findShort(s){
    var answer = 0;
    for (var i = 0; i < s.length; i++) {
    if (s[i] === " ") {
    answer = i - 1; 

    }
    
    }
    
    }
    findShort("bitcoin take over the world maybe who knows perhaps ");


    function wordCount(str) { 
        var words = str.split(" ");
      str.forEach(function(i) {
          console.log(str[i]);
      });
    }

    wordCount("hello to the world")
    




    // CODE TAKEN FROM NET / "locate the smallest word in a string"

    function WordCount(str) { 
        var words = str.split(" ");
        var sortedWords = words.sort(function(a,b) {
            if(a.length<b.length) return -1;
            else if(a.length>b.length) return 1;
            else return 0;
        });
       return sortedWords[0].length;             // remove .length to return the word itself
    }
    
    console.log(WordCount("hello to the world"));

// MOVIE DATABSE EXERCISE
//ARRAY-> OBJECT
var arr = [

                    {Name: "In Bruges", 
                    Rating: 5,
                    Watched: true},

                    {Name: "Frozen", 
                    Rating: 4.5,
                    Watched: false},

                    {Name: "Mad Max", 
                    Rating: 2,
                    Watched: true},

                    {Name: "LaLaLand", 
                    Rating: 2,
                    Watched: true},

                    {Name: "nanana", 
                    Rating: 7,
                    Watched: true},

    ]

// LOOPING THROUGH AN ARRAY OF OBJETCS
function buildString(movie) {

    var result = " You have ";
    if (movie.Watched) {
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movie.Name + "\"";
    result += " which has a " + movie.Rating + " star rating";
    return result; // entire string is put together in return
    
}

arr.forEach(function(movie) {
    console.log(buildString(movie));//function can be put inside 
                                    //the console log as it's been
                                    // returned in the function
   
});








// PRACTICE OF ABOVE EXERCISE 

arr.forEach(function(i) {
console.log(movies(i));
})




function movies(i) {
    var result = "";
if (i.Watched) {
    result += "I have seen the movie ";
}
else {
    result += "I have not seen the movie "
}
   result += "\"" + i.Name + "\"" 
if (i.Rating < 3) {
    result += " the ratings sucked"
}
else {
    result += " It got a rating of " + i.Rating;
}
  return result;
}


// THIS. FUNCTION NESTED INSIDE AN OBJECT

var comments = {};


 comments.data = ["good job!", "yolo", "getFuk", "jioji"] // adds this array 
                                                            //as an object to the above object


comments.print = function(){
    this.data.forEach(function(ele){   //this targets the .data object, so the function will just target the data
    console.log(ele);
    });
    }

    comments.print();
     good
     yolo
     getFuk
     jioji


          // NODE SELECTOR PRACTICE 

//SWITCHES BACKGROUND BETWEEN BLUE AND WHITE EVERY 3000 MILISECONDS //

     var body = document.querySelector("body");

     var isBlue = false;
     
     setInterval(function(){
     if (isBlue) {
         body.style.background = "white";
     }
     else { 
         body.style.background = "#323";
     }
     isBlue = !isBlue;
     }, 3000);

// IN HTML DOC // 
<p id="first" class="special">Hello</p>
<p class="special">Goodbye</p>
<p>Hi again</p>
<p id="last">Goodbye again</p>

// DIFFERENT WAY OF SELECTING THE FIRST 'P' //
var pOne = document.getElementById("first");
var pTWO = document.querySelectorAll(".special")[0];
var pThree = document.querySelector("p");
var pFour = document.querySelector("p:first-of-type");
var pFive = document.querySelector("#first");
var pSix = document.querySelector(".special");
var pSeven = document.getElementsByClassName("special")[0];
var pEight = document.getElementsByTagName("p")[0];


// CHANGING LINK TAGS AND IMG SRC

var a = document.getElementsByTagName("a")[0];
a.getAttribute("href"); //displays the attribute of href "goggle.com"

a.setAttribute("href", "http://www.lol.com"); // sets it as "lol.com"

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");


// DOM EVENTS 
//eg1
element.addEventListener(type, functionToCall); //eg.

var button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});
//eg2
var button = document.querySelectorAll("button")[1];
var paragraph = document.getElementsByTagName("p")[0];

button.addEventListener("click", function() {
    paragraph.textContent = "Someone clicked me!!";
});

//eg3
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
h1.style.color = "red";
});

//eg4 *bad example, as all li inside will be clicked*
document.querySelector("ul").addEventListener("click", function(){

    console.log("YOU CLICKED THE UL")
});

//eg5
var lis = document.querySelectorAll("li");

function lisSelect() {
    this.style.color = "pink";
}

for(var i = 0; i < lis.length; i++){
lis[i].addEventListener("click", lisSelect);
}

//eg6 *toggling background* LONG VERSION
document.querySelectorAll("button")[2].addEventListener("click", changeBackground);

var isRed = false;

function changeBackground(){
if(isRed){
    document.body.style.background = "white";
 
} else {
    document.body.style.background = "red";
    
}
isRed = !isRed
};

//eg6 *toggling background* SHORT VERSION
/* IN CSS .purple {

    background: purple;
}*/

document.querySelectorAll("button")[3].addEventListener("click", function(){
document.body.classList.toggle("purple");
});


// MOUSEOVER / MOUSEOUT LESSON

/* IN CSS FILE
                .done {
                text-decoration: line-through;
                opacity: 0.5;
                }

                .selected {
                color: green;
                }
                                    */

// LOOPS THROUGH LI'S APPLYING FUNCTION IF TRIGGERED
var liAll = document.querySelectorAll("li");

for (var i = 0; i < liAll.length; i++){
    liAll[i].addEventListener("mouseover", function(){
      //  this.style.color = "pink"; 
      this.classList.add("selected");
        });
    liAll[i].addEventListener("mouseout", function(){
       // this.style.color = "black";
       this.classList.remove("selected");
        });
    liAll[i].addEventListener("click", function(){
        this.classList.toggle("done")
     
    });
}

// FROM YDKJS FOUR DIFFERENT WAYS TO DEFINE 'THIS'

function foo() {
    console.log( this.bar );
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );	// "obj2"
new foo();			// undefined




     // GUEST COUNTER + INFO

var guests = [
    {Name:"Shaz",
    Address: "",
    Attending: true },
    
     {Name:"Tim",
     Address: "",
     Attending: true },

     {Name:"Ethan",
     Address: "",
     Attending: true },

     {Name:"Emma + baby",
     Address: "",
     Attending: true },

     {Name:"Lee",
     Address: "",
     Attending: true },

     {Name:"Steve",
     Address: "",
     Attending: true },

     {Name:"Fiona",
     Address: "",
     Attending: true },

     {Name:"Debs",
     Address: "",
     Attending: true },

     {Name:"John",
     Address: "",
     Attending: true },

     {Name:"Frazer",
     Address: "",
     Attending: true },

     {Name:"Daniel",
     Address: "",
     Attending: true },

     {Name:"Jo",
     Address: "",
     Attending: true },


     {Name:"Oscar",
     Address: "",
     Attending: true },

     {Name:"Adele",
     Address: "",
     Attending: true },

     {Name:"Bean",
     Address: "",
     Attending: true },

     {Name:"Matt",
     Address: "",
     Attending: true },

     {Name:"Adam",
     Address: "",
     Attending: true },

     {Name:"Kate",
     Address: "",
     Attending: true },

     {Name:"Simon",
     Address: "",
     Attending: true },

     {Name:"Sidel",
     Address: "",
     Attending: true },

     {Name:"Blane + gf",
     Address: "",
     Attending: true },

     {Name:"Becky + Matt",
     Address: "",
     Attending: true },


     {Name:"Shauna + crosbie",
     Address: "",
     Attending: true },


     {Name:"Mark Oreilly",
     Address: "",
     Attending: true },

     {Name:"Easton",
     Address: "",
     Attending: true },

     {Name:"Tyc",
     Address: "",
     Attending: true },

     {Name:"Dale + Tash",
     Address: "",
     Attending: true },

     {Name:"Emily",
     Address: "",
     Attending: true },

     {Name:"Rich",
     Address: "",
     Attending: true },

     {Name:"August",
     Address: "",
     Attending: true },

     {Name:"Ponty",
     Address: "",
     Attending: true },

     {Name:"Carol",
     Address: "",
     Attending: true },

     {Name:"Laura",
     Address: "",
     Attending: true },

     {Name:"Sarah",
     Address: "",
     Attending: true },
     
     {Name:"Jared",
     Address: "",
     Attending: true },

     {Name:"Velda",
     Address: "",
     Attending: false }
  
]

function GuestStatus(GuestList) {
    var result = "\"" + GuestList.Name + "\"" 
    if (GuestList.Attending) {
        result += " is attending your wedding party"
    }
    else {   
        result += " is NOT attending your wedding party"
    }
   return result;
}

    function GuestCount(GuestList){
    var plusGuests = 0;
    if (GuestList.Name.indexOf(' + ') > -1) {
    plusGuests += 1
    }
    return plusGuests;
    }

    guests.forEach(function(GuestList) {
    console.log(GuestStatus(GuestList));
    console.log(GuestCount(GuestList));
    });

    var allGuests = guests.length + plusGuests;
    console.log(allGuests);


// TRYING ABOVE WITHOUT .forEach

for (var GuestList = 0; GuestList < guests.length; GuestList++){
    var result = "\"" + guests[GuestList].Name + "\"" 
    if (guests[GuestList].Attending) {
        result += " is attending your wedding party"
    }
    else {   
        result += " is NOT attending your wedding party"
    }
    var plusGuests = 0;
    if (guests[GuestList].Name.indexOf(' + ') > -1) {
    plusGuests += 1
    }
     
    console.log(result);
};
console.log(plusGuests);


console.log(guests[GuestList].Name);


// JQUERY PRACTICE //

// selects all a tags
$("a") // same way you would select in css
       // 'dollar sign is universal selector 


 var styles = {
    color: "red",
    backgroundColor: "pink",
    border: "2px solid purple",
    display: "inline-block"
 }   

 $("h1").css(styles) // quick way to style, link to an object

 // OR

 $("li").css("color", "purple");
 $(".big").css("border", "1px dashed orange");

 // JS is alot more long winded
 var lis = document.querySelectorAll("li");

 for(var i = 0; i < lis.length; i++){
     lis[i].style.color = "red";
 }

// inline JQuery object styling

$("li").css({
border: "5px solid orange",
display: "block",
margin: "20px 20px"
});

// get any text from html 

$("h1").text() // will display text in all h1's
$("h1").text("bla bla") // will change h1 to given text

// change 'html doc' 

$("ul").html(<li>this is a list</li>); // changes all li in the ul
$("li:first-of-type").html("<li>wtf</li>"); // changes first li