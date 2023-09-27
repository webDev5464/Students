const playlist = [
  {
    id: "1",
    name: "Deva Deva",
    path: "./audio/Deva_Deva.mp3",
    singer: "arijit singh",
    audioImg: "./audioimg/devaimg.jpeg",
  },
  {
    id: "2",
    name: "Nayan ne bandh rakhi",
    path: "./audio/Nayan-Ne-Bandh-Rakhine(PaglaSongs).mp3",
    singer: "darshan raval",
    audioImg: "./audioimg/nayan-ne-bandh-rakhine.jpg",
  },
  {
    id: "3",
    name: "Raabta",
    path: "./audio/Raabta Agent Vinod 128 Kbps.mp3",
    singer: "arijit singh",
    audioImg: "./audioimg/Rabta-Agent-Vinod.jpg",
  },
  {
    id: "4",
    name: "Nighaho Me Dekho Meri Jo Hai Bas Gaya",
    path: "./audio/Nighaho-Me-Dekho-Meri-Jo-Hai-Bas-Gaya(PagalWorld).mp3",
    singer: "atif aslam",
    audioImg: "./audioimg/nigah.jpeg",
  },
  {
    id: "5",
    name: "Teri Deewani",
    path: "./audio/Teri-Deewani(PaglaSongs).mp3",
    singer: "Kailash Kher",
    audioImg: "./audioimg/teri deewani.jpeg",
  },
];

let playPause = document.getElementById("playPause");
let musicTitle = document.getElementById("musicTitle");
let musicImg = document.getElementById("musicImg");

musicImg.style.backgroundColor = "100px";

let loadMusic = document.createElement("audio");
let musicIndex = 0;
let musicCondition = false;

const musicHandler = () => {
  let randomMusic = Math.floor(Math.random() * playlist.length);
  loadMusic.src = playlist[randomMusic].path;
  musicTitle.innerHTML = playlist[randomMusic].name;
  musicImg.src = playlist[randomMusic].audioImg;

  loadMusic.load();
};

musicHandler(musicIndex);

const playPauseBtn = () => {
  if (!musicCondition) {
    PlayMusic();
  } else {
    PauseMusic();
  }
};

const PlayMusic = () => {
  musicCondition = true;
  loadMusic.play();
  playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

const PauseMusic = () => {
  musicCondition = false;
  loadMusic.pause();
  playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
};

const forwardBtn = () => {
  if (musicIndex < playlist.length - 1) {
    musicIndex += 1;
  } else {
    musicIndex = 0;
  }

  musicHandler(musicIndex);
  PlayMusic();
};

const backwardBtn = () => {
  if (musicIndex > 0) {
    musicIndex -= 1;
  } else {
    musicIndex = playlist.length - 1;
  }

  musicHandler(musicIndex);
  PlayMusic();
};

function musicTiming() {
  console.log(Number(loadMusic.duration));
  if (!isNaN(loadMusic.duration)) {
    let currentMinutes = Math.floor(loadMusic.duration / 60);

    console.log(currentMinutes);
    let currentTimeSeconds = math.floor(currentMinutes / 60);
    console.log(currentTimeSeconds.duration);
  } else {
    console.log("function is busy");
  }
}
