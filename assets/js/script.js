// ///Global Variables/////
// DOM elements
// submitEl = document.querySelector("#userInput");
// //API elements
// var displaySearch = "./search-results.html";

// Functions
// function init() {
//   getUserPreferences();
//   //TODO: Grab user preferences from local storage
// }

// function getUserPreferences() {
//   //Get's user preferences
// }

// function setUserPreferences() {
//   //Store form results into local storage
// }

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   l
// }

// /////Event Listeners/////
// submitButton.addEventListener("click", handleSearchFormSubmit);

//base link
//https://api.rawg.io/api/
//468ca2a => stash
let key = "545ccd805cac419baadf398d05033da5"

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    location.replace(`./assets/html/search-results.html?genre=${$("#userInput").val()}`)

    let inputVal = $("#userInput").val();
    console.log(inputVal);

    fetch("https://api.rawg.io/api/games?genres=" + inputVal + "&page_size=6&key=" + key)
        .then((res) => res.json())
        .then((res) => console.log(res.results))
})

// on search results page, add a class to each h3 or each image, then can run a for each on those to assign the display image and game title

function renderSearch() {
    let srTitle = $(".resultsTitle");
    let srImage =srTitle.siblings(".resultsImage");
    
    srTitle.each(function(idx) {
        $(this).val(object.results[idx].name);
        srImage.val();
      })
}



