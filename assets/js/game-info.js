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

    fetch("https://api.rawg.io/api/games/" + gameId + "?key=" + key)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            setNonPub(data);
            console.log(data);
        })

    // query elements for youtube
    let videoContainerEl = (`#videoContainer`);
    let videoTitleEl = (`#videoTitle`);
    let channelNameEl = (`#channelName`);
    let videoDescriptionEl = (`#videoDescription`);

    var apiKey = "AIzaSyBAnXu05c-vmBzUNTXWTLV5L4GaoN9OGyE"

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

    var obj = {
        video: {
            value: "<iframe v title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/watch?v=' + ${videoId}`  frameborder='0' allowFullScreen></iframe>"
        }
    }
    document.write(obj.video.value);

    function displayVideoData(data) {
        let { videoId } = data.items[0].id;
        let { title } = data.items[0].snippet;
        let { channelTitle } = data.items[0].snippet;
        let { description } = data.items[0].snippet;
        let { videoUrl } = `https://www.youtube.com/watch?v=` + videoId;
        document.querySelector(videoDescriptionEl).innerText = description
        document.querySelector(videoTitleEl).innerText = title
        document.querySelector(channelNameEl).innerText = channelTitle
        document.querySelector(videoContainerEl).innerHTML = videoUrl
    }
});
