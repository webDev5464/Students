import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Search from './components/Search'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import NewRelease from './pages/NewRelease'
import Artists from './pages/Artists'
import Songs from './components/AllSongs'
import MusicPlayer from './components/MusicPlayer'
import SingleSong from './components/SingleSong'
import TopPunjabi from './pages/TopPunjabi'
import EnglishMusic from './pages/EnglishMusic'
import Bollywood from './pages/Bollywood'
import Devotional from './pages/Devotional'

export const MainContext = createContext()

function App() {


  const [songs, setsongs] = useState(Songs)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [repeat, setRepeat] = useState(false)
  const [Favourite, setFovurite] = useState(0)
  const audioRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setCurrentSong(songs[0])
      // setCurrentSong(songs[currentSong.id + 1])
    }, 500)
  }, [])
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const playPause = (id) => {
    let SONG = songs.find((x) => x.id == id)
    if(isPlaying){
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
    setCurrentSong(SONG)
  }

  const nextPrevSong = (e) => {
    
  }

  const handleShuffle = () => {
    let num = Math.floor(Math.random() * (songs.length - 1))
    if(num === songs){
      return handleShuffle();
    }
    setsongs(num)

  }
  

  const changeCurrentTime = (e) => {
    let curTime = e.target.value
    audioRef.current.currentTime = curTime;
    setCurrentTime(curTime)
  }

  useEffect(() => {
    let Curtime = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime)
    }, 1000)


    if (currentTime == duration) {
      clearInterval(Curtime)
    }

  }, [currentSong, isPlaying])


  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formateSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes} : ${formateSeconds}`
    }
    return '00 : 00'
  }

  

  let value = { songs, navigate,repeat,setRepeat,handleShuffle, currentSong, playPause, isPlaying, currentTime, setCurrentTime, duration, changeCurrentTime, nextPrevSong }

  return (
    <>
      <MainContext.Provider value={value}>
        <audio loop={repeat} src={currentSong.path} ref={audioRef} onDurationChange={(e) => setDuration(e.currentTarget.duration)}  />
        <Navbar formatTime={formatTime} duration={duration} />
        <Routes>
          <Route path='songs' element={<SingleSong />}></Route>
        </Routes>
        <Sidebar>
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='newrelease' element={<NewRelease />}></Route>
            <Route path='toppunjabi' element={<TopPunjabi />}></Route>
            <Route path='englishmusic' element={<EnglishMusic />}></Route>
            <Route path='hindimusic' element={<Bollywood />}></Route>
            <Route path='artists' element={<Artists />}></Route>
            <Route path='devotional' element={<Devotional />}></Route>
          </Routes>
        </Sidebar>
        <MusicPlayer isPlaying={isPlaying} formatTime={formatTime} audioRef={audioRef} />
        <Routes>
          <Route path='search' element={<Search />}></Route>
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
