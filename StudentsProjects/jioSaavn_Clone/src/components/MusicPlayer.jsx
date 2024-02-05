import React, { useContext, useEffect, useState } from 'react'
import { FaRepeat } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { BsArrowsAngleContract } from "react-icons/bs";
import { MainContext } from '../App';
import { FaPause } from "react-icons/fa";


const MusicPlayer = ({ isPlaying, audioRef, formatTime }) => {

    const { navigate, playPause, currentTime,handleShuffle, nextPrevSong, duration, currentSong, repeat, setRepeat, changeCurrentTime } = useContext(MainContext)
    const [arrows, setArrows] = useState(false)
    const [volume, setVolume] = useState(50)
    const [isMute, setMute] = useState()


    const navigateHome = () => {
        navigate(-1)
    }


    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = isMute
        }
    }, [volume, isMute])


    return (
        <>
            <div className="container px-2 py-2 border-gray-400 h-20 fixed bottom-0 bg-gray-100 flex justify-between items-center ">
                <div className='absolute -top-4 w-full -ml-2'>
                    <input type="range" value={currentTime} max={duration} step='0.25' onChange={(e) => changeCurrentTime(e)} name="" className='range cursor-pointer text-teal-600 w-full  accent-teal-600' />
                </div>
                <div className="flex gap-2 items-center">
                    <img className='w-16' src={currentSong.audioImg} alt="Error" />
                    <h3 className='text-xl'>{currentSong.name}</h3>
                </div>
                <div className="flex gap-10 items-center text-2xl">
                    <FaRepeat color={repeat ? 'teal' : 'gray'} onClick={() => setRepeat((prev) => !prev)} className='cursor-pointer text-gray-700 hover:text-gray-500' />
                    <FaBackwardStep onClick={() => nextPrevSong(currentSong.id - 1)} className='cursor-pointer text-gray-700 hover:text-gray-500' />
                    <button className='cursor-pointer text-gray-700 hover:text-gray-500' onClick={() => playPause(currentSong.id)}>
                        {
                            !isPlaying || currentTime == duration ? <FaPlay /> : <FaPause />
                        }
                    </button>
                    <FaStepForward onClick={() => nextPrevSong()} className='cursor-pointer text-gray-700 hover:text-gray-500' />
                    <FaShuffle onClick={() => handleShuffle()} className='cursor-pointer text-gray-700 hover:text-gray-500' />
                </div>
                <div className="flex gap-10 mr-6 items-center ">
                    <h3 className='text-xs'> {formatTime(currentTime)} / {formatTime(duration)} </h3>


                    <HiDotsHorizontal className='text-2xl cursor-pointer text-gray-700 hover:text-gray-500' />
                    <button onClick={() => setMute((prev) => !prev)}>
                        {
                            isMute || volume <= 0 ? <FaVolumeMute onClick={() => setVolume(50)} className='group text-2xl cursor-pointer text-gray-700 hover:text-gray-500' /> : <FaVolumeUp onClick={() => setVolume(0)} className='group text-2xl cursor-pointer text-gray-700 hover:text-gray-500' />
                        }
                    </button>
                    <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} className='w-20 cursor-grabbing text-teal-600 accent-teal-600' />
                    <NavLink to={'songs'} onClick={() => setArrows(!arrows)}>
                        {
                            arrows ? <BsArrowsAngleContract onClick={navigateHome} className='text-2xl cursor-pointer text-gray-700 hover:text-gray-500' /> : <BsArrowsAngleExpand className='text-2xl cursor-pointer text-gray-700 hover:text-gray-500' />
                        }</NavLink>

                </div>
            </div>
        </>
    )
}

export default MusicPlayer
