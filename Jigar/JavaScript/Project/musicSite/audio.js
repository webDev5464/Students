const playlist = [
  {
    id: "1",
    name: "Deva Deva",
    path: "./audio/Deva_Deva.mp3",
    singer: "arijit singh",
    audioImg: "./audioimg/devaimg.jpeg",
  },
  //   {
  //     id: "2",
  //     name: "Nayan ne bandh rakhi",
  //     path: "./audio/Nayan-Ne-Bandh-Rakhine(PaglaSongs).mp3",
  //     singer: "darshan raval",
  //     audioImg: "./audioimg/nayan-ne-bandh-rakhine.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "Raabta",
  //     path: "./audio/Raabta Agent Vinod 128 Kbps.mp3",
  //     singer: "arijit singh",
  //     audioImg: "./audioimg/Rabta-Agent-Vinod.jpg",
  //   },
  //   {
  //     id: "4",
  //     name: "audio/Nighaho Me Dekho Meri Jo Hai Bas Gaya",
  //     path: "./audio/audio/Nighaho-Me-Dekho-Meri-Jo-Hai-Bas-Gaya(PagalWorld).mp3",
  //     singer: "atif aslam",
  //     audioImg: "./audioimg/nigah.jpeg",
  //   },
  //   {
  //     id: "5",
  //     name: "Teri Deewani",
  //     path: "./audio/Teri-Deewani(PaglaSongs).mp3",
  //     singer: "Kailash Kher",
  //     audioImg: "./audioimg/teri deewani.jpeg",
  //   },
];

let playPause = document.getElementById("playPause");

let loadMusic = document.createElement("audio");
let musicIndex = 0;
let musicCondition = false;

const musicHandler = (i) => {
  loadMusic.src = playlist[i].path;
  // console.log((loadMusic.src = playlist[i].path));

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
