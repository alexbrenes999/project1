
//base link
//https://api.rawg.io/api/
//468ca2a => stash
// let key = "545ccd805cac419baadf398d05033da5"

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let inputVal = $("#userInput").val();
    location.replace(`search-results.html?genre=${inputVal}`)
})




