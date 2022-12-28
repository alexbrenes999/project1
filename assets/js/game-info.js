///// query elements
//query elements for rawG
/*let gameTitleEl = $(`#gameTitle`);
let gameRatingEl = $(`#gameRating`);
let coverArtEl = $(`#coverArt`);
let summaryEl = $(`#summary`);
let releaseDateEl = $(`#releaseDate`);
let genreEl = $(`#genre`);
let publisherEl = $(`#publisher`);
let ratingEl = $(`#rating`);*/
//query elements for youtube
let videoContainerEl = (`#videoContainer`);
let videoTitleEl = (`#videoTitle`);
let channelNameEl = (`#channelName`);
let videoDescriptionEl = (`#videoDescription`);

var game = "mario"; // to-do: make this part dynamic with Rawg Api.
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
        document.querySelector("#videoContainer").innerHTML= videoUrl
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
    let {videoId} = data.items[0].id;
    let {title} = data.items[0].snippet;
    let {channelTitle} = data.items[0].snippet;
    let {description} = data.items[0].snippet;
    let {videoUrl} = `https://www.youtube.com/watch?v=` + videoId;
    document.querySelector(videoDescriptionEl).innerText= description
    document.querySelector(videoTitleEl).innerText= title
    document.querySelector(channelNameEl).innerText= channelTitle
    document.querySelector(videoContainerEl).innerHTML= videoUrl
}