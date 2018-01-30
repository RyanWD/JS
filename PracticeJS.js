var button = document.querySelectorAll("button")[1];
var paragraph = document.getElementsByTagName("p")[0];

button.addEventListener("click", function() {
    paragraph.textContent = "Someone clicked me!!";
});

var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
h1.style.color = "red";
});

document.querySelector("ul").addEventListener("click", function(){

    console.log("YOU CLICKED THE UL")
});

var lis = document.querySelectorAll("li");


function lisSelect() {
    this.style.color = "pink";
}

for(var i = 0; i < lis.length; i++){
lis[i].addEventListener("click", lisSelect);
}

/*
document.querySelectorAll("button")[2].addEventListener("click", changeBackground);

//if white make it purple 
// else make it white

var isRed = false;

function changeBackground(){
if(isRed){
    document.body.style.background = "white";
 
} else {
    document.body.style.background = "red";
    
}
isRed = !isRed
};
*/
document.querySelectorAll("button")[3].addEventListener("click", function(){
document.body.classList.toggle("purple");
});
