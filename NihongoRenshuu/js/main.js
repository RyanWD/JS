
// listen for form submit 
document.getElementById("myForm").addEventListener("submit", saveLanguage);

// save bokmark
function saveLanguage(e){

    var inputEnglish = document.getElementById("inputEnglish").value;
    var inputJapanese = document.getElementById("inputJapanese").value;

if(!inputEnglish || !inputJapanese) {
    alert("Please fill in form")
    return false;
}


    var holder = {
    name: inputEnglish,
    url: inputJapanese
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

languageResults.innerHTML += '<div class="langBox">' + 
                                '<h3 id="eng" class="card-header">' +name+ '</h3>' +
                                 '<h3 id="jap" class="jap card-header">' +url+ '</h3>' +
                                 '<div class="align-delete">' +
                                 '<a onclick="deleteHolder(\''+url+'\')" id="delete" class="btn btn-danger">Delete</a>' +
                                 '</div>' +
                                 '</div>';

                              

                                      
                                }

};

