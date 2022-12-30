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

    function setNonPub(object) {
        gameTitleEl.text(object.results[0].name);
        gameRatingEl.text("Rated: " + object.results[0].esrb_rating.name);
        coverArtEl.attr("src", object.results[0].background_image
        )
        releaseDateEl.text("Released: " + object.results[0].released);
        // publisherEl.text(object.results.);
        ratingEl.text("Rating: " + object.results[0].rating);
        // summaryEl.text(object.results.);
        //do we want genre considering thats what they searched originally to even get here
        // genreEl.text(object.results.);
    }

    // gets all the non publisher information and dynamically sets the text for each
    //doesn't return the response you would expect based on the docs at https://api.rawg.io/docs/#operation/games_read
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

    //query elements for youtube
    let videoContainerEl = (`#videoContainer`);
    let videoTitleEl = (`#videoTitle`);
    let channelNameEl = (`#channelName`);
    let videoDescriptionEl = (`#videoDescription`);

    // var apiKey = "AIzaSyBAnXu05c-vmBzUNTXWTLV5L4GaoN9OGyE"
    var apiKey = "AIzaSyAe5b-AzhWbl3ImdWGb6YnzmtDRcPbeXes"

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${game}+review|${game}+gameplay&type=video&part=snippet&videoEmbeddable=true`
    )
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data)
            console.log(data.items[0].id.videoId)
            let videoId = data.items[0].id.videoId
            var videoUrl = `https://www.youtube.com/watch?v=` + videoId;
            document.querySelector("#videoContainer").innerHTML = videoUrl
            let title = data.items[0].snippet.title
            console.log(data.items[0].snippet.title)
            displayVideoData(data)
        }
        );

    // var obj = {
        
    //     video: {
    //         value: "<iframe v title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/watch?v=' + ${videoId}`  frameborder='0' allowFullScreen></iframe>"
    //     }
    // }
    // document.write(obj.video.value);
    var video = `<iframe width="420" height="315"
src="https://www.youtube.com/embed/"${videoId}>
</iframe>`

    function displayVideoData(data) {
        let { videoId } = data.items[0].id;
        let { title } = data.items[0].snippet;
        let { channelTitle } = data.items[0].snippet;
        let { description } = data.items[0].snippet;
        let { videoUrl } = `https://www.youtube.com/watch?v=` + videoId;
        document.querySelector(videoDescriptionEl).innerText = description
        document.querySelector(videoTitleEl).innerText = title
        document.querySelector(channelNameEl).innerText = channelTitle
        document.querySelector(videoContainerEl).innerHTML = video
    }
});
