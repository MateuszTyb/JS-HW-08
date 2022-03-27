const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
let myStorage = localStorage;
let vid = iframe.src;

console.log(localStorage);

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const onPlay = function (currentTime) {
  let time = currentTime.seconds;
  console.log(time);
  localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
};

player.on("play", onPlay);

player
  .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
