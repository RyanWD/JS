var sidebarOpen = document.querySelector("a");
var sidebarClose = document.getElementsByClassName("btn-close")[0];
var h1MoveRight = document.getElementById("main");
var sideBar = document.getElementById("side-menu");

// OPENS SIDEBAR AND PUSHES H1 ACROSS TO THE RIGHT
sidebarOpen.addEventListener("click", function() {
sideBar.style.width = "250px";
h1MoveRight.style.marginLeft = "250px";
});

// CLOSES SIDEBAR AND RETURNS H1

sidebarClose.addEventListener("click", function() {
    sideBar.style.width = "0";
    h1MoveRight.style.marginLeft= "0";
});

