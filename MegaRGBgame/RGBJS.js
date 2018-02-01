/*
[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
*/
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init(); //MAIN SCRIPT ON PAGE LOAD

function init(){ 
setupModeButtons(); 
setupSquares(); 
reset();
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
       //grab color of clicked square
       var clickedColor = this.style.backgroundColor;
       //compare color to picked color
       if(clickedColor === pickedColor){
         messageDisplay.textContent = "Correct"
         resetButton.textContent = "Play Again?"
         changeColors(clickedColor);
         h1.style.backgroundColor = clickedColor;
       } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again!"
       }
       });
       }
}

//CLICKING EASY OR HARD MODE BUTTON SCRIPT
function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
       // above line is the same as the 'if' statement
        if(this.textContent === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    });
    }
}



resetButton.addEventListener("click", function(){
 reset();
});


//GENERAL RESET SCRIPT
function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color 
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
   if (colors[i]){
       squares[i].style.display = "block";
       squares[i].style.backgroundColor = colors[i];
   } else {
       squares[i].style.display = "none";
   }
   }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
   
   }
   
function changeColors(color){
    //loop through all squares
for (var i = 0; i < squares.length; i++) {
     //change each color to match given color
squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


//PUSHES (AMOUNT SPECIFIED) RANDOM RGB'S INTO THE ARRAY 
function generateRandomColors(num){
//make an array
    var arr = []
//add num random colors to array
for (var i = 0; i < num; i++){
    //get random color and push into array
   arr.push(randomColor());   
}
//return the array
return arr;
}

//CREATES RANDOM RGB COLOR
function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256)
   return "rgb(" + r + ", " + g + ", " + b + ")";
   
}


//WHEN BUTTONS HAD SEPERATE CODE - TOO DRY.




//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

/*
easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    if (colors[i]){
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
}
h1.style.backgroundColor = "steelblue"
messageDisplay.textContent = "Good luck!";
});

*/

/*
hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = "Good luck";
});
*/
