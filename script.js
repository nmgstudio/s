const playButton = document.getElementById("playButton");
const playerContainer = document.getElementById("playerContainer");
const audioPlayer = document.getElementById("audioPlayer");
const controlIcon = document.getElementById("controlIcon");
const songTitle = document.getElementById("songTitle");
const songThumbnail = document.getElementById("songThumbnail");

let isPlaying = false;
let currentSong = {
  name: "Shaheed",
  src: "media/song.mp3",
  thumbnail: "media/thumbnail1.png"
};

playButton.onclick = () => {
  playerContainer.style.display = "flex";
  audioPlayer.play();
  isPlaying = true;
  controlIcon.innerText = "⏸️";
};

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    controlIcon.innerText = "▶️";
  } else {
    audioPlayer.play();
    controlIcon.innerText = "⏸️";
  }
  isPlaying = !isPlaying;
}

function playSong(name, src, thumbnail) {
  currentSong = { name, src, thumbnail };
  songTitle.innerText = name;
  songThumbnail.src = thumbnail;
  audioPlayer.src = src;
  audioPlayer.play();
  controlIcon.innerText = "⏸️";
  isPlaying = true;
}

function prevSong() {
  // implement later
}

function nextSong() {
  // implement later
}

function repeatSong() {
  audioPlayer.loop = !audioPlayer.loop;
  alert(audioPlayer.loop ? "Repeat ON" : "Repeat OFF");
}
