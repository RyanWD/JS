var p1 = document.querySelectorAll("button")[0];
var p2 = document.querySelectorAll("button")[1];
var resetButton = document.querySelectorAll("button")[2];
var p1Display = document.querySelector("span");
var p2Display = document.querySelectorAll("span")[1];
var maxScore = document.querySelectorAll("span")[2];
var numInput = document.querySelector("input");
var gameOver = false;
var winningScore = 5;




var p1Score = 0;

p1.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.style.color = "green";
            // OR p1Display.classlist.add("winner") 
                 // .winner in CSS file adding green to color
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

var p2Score = 0;

p2.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.style.color = "green";
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});


resetButton.addEventListener("click", function(){
reset();
});

numInput.addEventListener("change", function(){
    //change event - anytime the value changes the function will trigger
    maxScore.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
   });



function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = "";
    p2Display.style.color = "";
    gameOver = false;

}
