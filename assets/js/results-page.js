$(function () {
    let key = "545ccd805cac419baadf398d05033da5"

    let selected = (new URL(document.location)).searchParams;
    let genre = selected.get("genre")
    let srTitle = $(".resultsTitle");
    let srImage = $(".resultsImage");
    let releaseDate
    let gameGenre
    let createdBy
    let ageRating

    // updates the game title and covert art
    function renderSearch(object) {
        srTitle.each(function (idx) {
            $(this).text(object.results[idx].name);
            $(this).attr("id", object.results[idx].slug)
        })

        srImage.each(function (idx) {
            $(this).attr("src", object.results[idx].background_image);
        })
    }

    //grabs information about the game to from the api to dynamically change the game title and cover art
    fetch("https://api.rawg.io/api/games?genres=" + genre + "&page_size=6&game_pk&key=" + key)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            renderSearch(data);
            console.log(data);
        })

    srImage.on("click", function (event) {
        event.preventDefault();
        let game = $(this).siblings(srTitle).text();
        let slugId = $(this).siblings(srTitle).attr("id");
        location.replace(`game-info.html?title=${game}&gameId=${slugId}`)
    })
});
