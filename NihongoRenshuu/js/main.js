
// listen for form submit 
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// save bokmark
function saveBookmark(e){

    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;

if(!siteName || !siteUrl) {
    alert("Please fill in form")
    return false;
}


    var bookmark = {
    name: siteName,
    url: siteUrl
    }      
    // prevents form from submitting.
   

if (localStorage.getItem('bookmarks') === null) {
    // Init array 
var bookmarks = [];
// add to array 
bookmarks.push(bookmark);
// set to local storage 
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else {
    // get bookmarks from local storage 
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // add bookmarkt to array
    bookmarks.push(bookmark);
    // set back to local storage 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
document.getElementById('myForm').reset();

fetchBookmarks();

e.preventDefault();  
}

// Delete bookmark 
function deleteBookmark(url){
//get bookmarks from localStorage 
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
// Loop through bookmarks
for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url === url) {

        //remove from array
        bookmarks.splice(i, 1);
    }

}
    //reset back to local storage 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //re fetch bookmarks
    fetchBookmarks();
}


// Fetch bookmarks 
function fetchBookmarks(){
    // get bookmarks from local storage 
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

// get output ID
var bookmarksResults = document.getElementById('bookmarksResults');
bookmarksResults.innerHTML = '';
for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

bookmarksResults.innerHTML += '<div class="langBox">' + 
                                '<h3 id="eng" class="card-header">' +name+ '</h3>' +
                                 '<h3 id="jap" class="jap card-header">' +url+ '</h3>' +
                                 '<div class="align-delete">' +
                                 '<a onclick="deleteBookmark(\''+url+'\')" id="delete" class="btn btn-danger">Delete</a>' +
                                 '</div>' +
                                 '</div>';
}
};



// local storage test 
/* localStorage.setItem('test', 'Hello world');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
 */