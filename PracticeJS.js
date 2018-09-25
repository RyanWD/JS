

/*var liAll = document.querySelectorAll("li");

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
*/




/*
if (jQuery) {
    alert("it's loaded");
} else {
   alert("Nope");
}
*/


/*
$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "1px solid orange");
$("div:first-of-type").css("color", "white");
*/

/*
$("li:first-of-type").html("<li>wtf</li>");
*/


function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
