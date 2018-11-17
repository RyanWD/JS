
// listen for form submit 
document.getElementById("myForm").addEventListener("submit", saveLanguage);

// save bokmark
function saveLanguage(e){

    var inputEnglish = document.getElementById("inputEnglish").value;
    var inputJapanese = document.getElementById("inputJapanese").value;
    var inputComment = document.getElementById("inputComment").value;

if(!inputEnglish || !inputJapanese) { // removing || !inputComment - test
    alert("Please fill in form")
    return false;
}


    var holder = {
    name: inputEnglish,
    url: inputJapanese,
    com: inputComment
    }      
    // prevents form from submitting.
   

if (localStorage.getItem('gengo') === null) {
    // Init array 
var gengo = [];
// add to array 
gengo.push(holder);
// set to local storage 
localStorage.setItem('gengo', JSON.stringify(gengo));
} else {
    // get gengo from local storage 
    var gengo = JSON.parse(localStorage.getItem('gengo'));
    // add Holdert to array
    gengo.push(holder);
    // set back to local storage 
    localStorage.setItem('gengo', JSON.stringify(gengo));
}
document.getElementById('myForm').reset();

fetchLanguage();

e.preventDefault();  
}

// Delete holder 
function deleteHolder(url){
//get gengo from localStorage 
var gengo = JSON.parse(localStorage.getItem('gengo'));
// Loop through gengo
for(var i = 0; i < gengo.length; i++){
    if(gengo[i].url === url) {

        //remove from array
        gengo.splice(i, 1);
    }

}
    //reset back to local storage 
    localStorage.setItem('gengo', JSON.stringify(gengo));

    //re fetch gengo
    fetchLanguage();
}


// Fetch gengo 
function fetchLanguage(){
    // get gengo from local storage 
    var gengo = JSON.parse(localStorage.getItem('gengo'));

// get output ID
var languageResults = document.getElementById('languageResults');
languageResults.innerHTML = '';
for(var i = 0; i < gengo.length; i++){
    var name = gengo[i].name;
    var url = gengo[i].url;
    var com = gengo[i].com; // ALSO PART OF TEST below
//FROM HERE - TEST
     if (com === "") {

        languageResults.innerHTML += '<div class="langBox">' + 
        '<h3 id="eng" class="card-header">' +name+ '</h3>' +
         '<h3 id="jap" class="jap card-header">' +url+ '</h3>' +
         '<div class="align-delete">' +
         '<a onclick="deleteHolder(\''+url+'\')" id="delete" class="btn btn-danger">Delete</a>' +
         '</div>' +
         '</div>';



    } else {
        languageResults.innerHTML += '<div class="langBox">' + 
        '<h3 id="eng" class="card-header">' +name+ '</h3>' +
         '<h3 id="jap" class="jap card-header">' +url+ '</h3>' +
         '<h3 id="com" class="com card-header">' +com+ '</h3>' +
         '<div class="align-delete">' +
         '<a onclick="deleteHolder(\''+url+'\')" id="delete" class="btn btn-danger">Delete</a>' +
         '</div>' +
         '</div>';
    } 
// TO HERE



                      

                                      
                                }

};

