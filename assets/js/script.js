$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let inputVal = $("#userInput").val();
    location.replace(`search-results.html?genre=${inputVal}`)
})