// //query elements for youtube
// let thumbnailEl = $(`#thumbnail`);
// let videoTitleEl = $(`#thumbnail`);
// let channelNameEl = $(`#channelName`);
// let videoDescriptionEl = $(`#videoDescription`);

$(function () {
    let key = "545ccd805cac419baadf398d05033da5"
    let furtherDetails = (new URL(document.location)).searchParams;
    let game = furtherDetails.get("title");
    let gameId = furtherDetails.get("gameId");
    let summaryEl = $("#summary");
    let gameTitleEl = $("#gameTitle");
    let gameRatingEl = $("#gameRating")
    let releaseDateEl = $("#releaseDate");
    let genreEl = $("#genre");
    let publisherEl = $("#publisher");
    let ratingEl = $("#rating");
    let coverArtEl = $("#coverArt");

    gameTitleEl.text(game);

    console.log(game);
    console.log(gameId);

    function setNonPub (object) {
        gameTitleEl.text(object.results[0].name);
        gameRatingEl.text("Rated: " +object.results[0].esrb_rating.name);
        coverArtEl.attr("src", object.results[0].background_image
        )
        releaseDateEl.text("Released: " + object.results[0].released);
        // publisherEl.text(object.results.);
        ratingEl.text("Rating: " + object.results[0].rating);
        // summaryEl.text(object.results.);
        //do we want genre considering thats what they searched originally to even get here
        // genreEl.text(object.results.);
    }

    // gets all the non publisher information and dynamcally sets the text for each
    //doesnt return the response you would expect based on the docs at https://api.rawg.io/docs/#operation/games_read
    fetch("https://api.rawg.io/api/games?id=" + gameId + "&page_size=1&key=" + key)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            setNonPub(data);
            console.log(data);
        })


    //api gets and sets the publisher of the game
    // doesnt return the response that the docs seem to say it should at https://api.rawg.io/docs/#operation/publishers_read
// https://rawg.io/api/games/portal-2/collections

    // fetch("https://api.rawg.io/api/games?id=" + gameId + "&key=" + key)
    //     .then(function (res) {
    //         return res.json();
    //     })
    //     .then(function (data) {
            
    //         console.log(data);
    //     })
});
