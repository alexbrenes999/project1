/////Global Variables/////
//DOM elements
submitEl = document.querySelector("#submit");
//API elements
var displaySearch = "./search-results.html";

//Functions
function init() {
  getUserPreferences();
  //TODO: Grab user preferences from local storage
}

function getUserPreferences() {
  //Get's user preferences
}

function setUserPreferences() {
  //Store form results into local storage
}

function handleSearchFormSubmit(event) {
  event.preventDefault();
}

/////Event Listeners/////
submitButton.addEventListener("click", handleSearchFormSubmit);
