import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App.jsx'
import { FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlay } from "react-icons/fa6";



const Home = () => {

  let { songs, playPause } = useContext(MainContext)

  let [album, setAlbum] = useState([])
  let [punjabi, setPunjabi] = useState([])
  let [english, setEnglish] = useState([])
  let [hindi, setHindi] = useState([])
  let [party, setParty] = useState([])
  let [devotional, setDevotional] = useState([])

  useEffect(() => {
    let ALBUM = songs.filter((x) => x.category == 'New Releases')
    setAlbum(ALBUM)

    let PUNJABI = songs.filter((x) => x.language == 'Punjabi')
    setPunjabi(PUNJABI)

    let ENG = songs.filter((x) => x.language == 'English')
    setEnglish(ENG)

    let HIN = songs.filter((x) => x.language == 'Hindi')
    setHindi(HIN)

    let PAR = songs.filter((x) => x.category == 'Party')
    setParty(PAR)

    let DEV = songs.filter((x) => x.category == 'Devotional')
    setDevotional(DEV)


  }, [])

  return (
    <>
      <div className="container relative">
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>New Releases</h3>
          <div className='dashboard py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              album.map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group md:w-40' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>Punjabi Music</h3>
          <div className='py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              punjabi.slice(0, 6).map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>English Music</h3>
          <div className='py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              english.slice(0, 6).map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>Best of Hindi Music</h3>
          <div className='py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              hindi.slice(0, 12).map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>Best of Party Music</h3>
          <div className='py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              party.slice(0, 12).map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div>
          <h3 className='text-xl font-semibold text-slate-700'>Devotional</h3>
          <div className='py-10 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
              devotional.map((x) => {
                return (
                  <div key={x.id} className="songs relative group cursor-pointer">
                    <img className='group md:w-40' src={x.audioImg} alt="" />
                    <h3 className='truncate font-semibold text-slate-700'>{x.name}</h3>
                    <h3 className='truncate text-xs'>{x.singers}</h3>
                    <div className='invisible group-hover:visible transition-all duration-500'>
                      <div className='absolute top-12 left-14 text-4xl'>
                        <FaPlay onClick={() => playPause(x.id)} className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
                      </div>
                      <div className=' text-white text-xl'>
                        <FaRegHeart className='absolute top-[62%] left-2' />
                        <HiDotsHorizontal className='absolute top-[62%] right-2' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
