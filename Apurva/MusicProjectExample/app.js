const songs = [
  {
    id: '1',
    songName: "On My Way",
    singerName: "Alan Walker",
    poster: "img/1.jpg"
  },
  {
    id: '2',
    songName: "Alan Walker-fade",
    singerName: "Alan Walker",
    poster: "img/2.jpg"
  },
  {
    id: "3",
    songName: "Cartoon - On & On",
    singerName: "Daniel Levi",
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: "Warriyo - Mortals",
    singerName: "Mortals",
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: "Ertlugrul Gazi",
    singerName: "Ertlugrul",
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: "Electronic Music",
    singerName: "Electro",
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: "Agar Tum Sath Ho",
    singerName: "Tamashaa",
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: "Suna Hai",
    singerName: "Neha Kakker",
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: "Dilber",
    singerName: "Satyameva Jayate",
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: "Duniya",
    singerName: "Luka Chuppi",
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: "Lagdi Lahore Di",
    singerName: "Street Dancer 3",
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: "Putt Jatt Da",
    singerName: "Putt Jatt Da",
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: "Baarishein",
    singerName: "Atif Aslam",
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: "Vaaste",
    singerName: "Dhvani Bhanushali",
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: "Lut Gaye",
    singerName: "Jubin Nautiyal",
    poster: "img/15.jpg",
  },
  {
    id: "16",
    songName: "Tu Meri Jindgi Hai Tu",
    singerName: "Jubin Nautiyal",
    poster: "img/16.jpg",
  },
  {
    id: "17",
    songName: " Batao Yadd Hai Tumko Wo Jab Dil Ko Churaya Tha",
    singerName: "Rahat Fateh Ali Khan",
    poster: "img/17.jpg",
  },
  {
    id: "18",
    songName: "Mere Dhol Judaiya",
    singerName: "Ali Sethi Seha Gill",
    poster: "img/18.jpg",
  },
  {
    id: "19",
    songName: "Eh Munde Pagal Ne Saare",
    singerName: "Ap Dhillon, Gurinder Gill, Shinda Kahlon",
    poster: "img/19.jpg",
  },
  {
    id: "20",
    songName: "Dunny 82k",
    singerName: "Ap Dhillon, Gurinder Gill, Shinda Kahlon",
    poster: "img/20.jpg",
  }
]

const renderAllSongs = document.getElementById("renderAllSongs")

renderAllSongs.innerHTML = songs.map((e) => {
  return `
    <div class="songCard">
      <div class="songBanner">
        <img src="${e.poster}" alt="" width="200px" />
      </div>

      <div class="songDetail">
        <p>Song Name :- ${e.songName}</p>
        <p>Singer Name :- ${e.singerName}</p>
      </div>
    </div>
  `
}).join("")