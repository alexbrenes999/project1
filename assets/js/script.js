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

$("#searchButton").on("click", function(event) {
    event.preventDefault();
    let inputVal = $("#userInput").val();
    console.log(inputVal);
    fetch("https://api.rawg.io/api/games?genres=" + inputVal +"&page_size=6&key=" + key)
    .then((res) => res.json())
    .then((res) => console.log(res))
})

// function test() {
//     fetch("https://api.rawg.io/api/games?genres=action&key=545ccd805cac419baadf398d05033da5")
//     .then((res) => res.json())
//     .then((res) => console.log(res))
// }

// test()

