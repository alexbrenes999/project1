$(function () {
    let key = "545ccd805cac419baadf398d05033da5"

    let furtherDetails = (new URL(document.location)).searchParams;
    let game = furtherDetails.get("title");
    let gameId = furtherDetails.get("gameId");

    let summaryEl = $("#summary");
    let gameTitleEl = $("#gameTitle");
    let gameRatingEl = $("#gameRating")
    let releaseDateEl = $("#releaseDate");
    let publisherEl = $("#publisher");
    let ratingEl = $("#rating");
    let coverArtEl = $("#coverArt");

    gameTitleEl.text(game);

    console.log(game);
    console.log(gameId);

    function setNonPub(object) {
        console.log(object)
        gameTitleEl.text(object.name);
        gameRatingEl.text("Rated: " + object.esrb_rating.name);
        coverArtEl.attr("src", object.background_image
        )
        releaseDateEl.text("Released: " + object.released);
        publisherEl.text("Publisher: " + object.publishers[0].name);
        ratingEl.text("Rating: " + object.rating);
        summaryEl.text(object.description_raw);
    }


    fetch("https://api.rawg.io/api/games?id=" + gameId + "&page_size=1&key=" + key)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            setNonPub(data);
            console.log(data);
        })

    // query elements for youtube
    let videoContainerEl = $(`#videoContainer`);
    let videoTitleEl = $(`.videoTitle`);
    let channelNameEl = $(`.channelName`);
    let videoDescriptionEl = $(`.videoDescription`);

    var apiKey = "AIzaSyBAnXu05c-vmBzUNTXWTLV5L4GaoN9OGyE"
    // var apiKey = "AIzaSyAe5b-AzhWbl3ImdWGb6YnzmtDRcPbeXes"

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
            console.log(data.items[0].snippet.title)
            displayVideoData(data)
        }
        );

    function displayVideoData(data) {
        let { videoId } = data.items[0].id;

        let videoUrl = `https://www.youtube.com/watch?v=` + videoId;
        console.log(videoUrl);
    
        var results = $(".results"); //for loop so the content changes dynamically; currently incomplete
        for (let i = 0; i < data.items.length; i++) {
            $(videoTitleEl).text(data.items[i].snippet.title);
            $(channelNameEl).text(data.items[i].snippet.channelTitle);
            $(videoDescriptionEl).text(data.items[i].snippet.description);
            document.querySelector("iframe").src = `http://www.youtube.com/embed/${videoId}?enablejsapi=1`

            if (i >= 2) {
                break
            };
        }
    }
});
