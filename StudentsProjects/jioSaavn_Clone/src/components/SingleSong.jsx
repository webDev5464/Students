import React, { useContext, useEffect } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MainContext } from '../App';

const SingleSong = () => {

    const { currentSong } = useContext(MainContext)

    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <div data-aos='zoom-in-up' data-aos-duration='500' className=" bg-gray-100 h-[78vh] w-full">
                <div className=' flex mx-32 gap-10'>
                    <div className='mt-10'>
                        <img src={currentSong.audioImg} className='w-80 border-2' alt="Error" />
                    </div>
                    <div className='mt-9 text-2xl w-[70%] '>
                        <h3>
                            Song Name : - <span className='text-teal-600 italic'>{currentSong.name}</span>
                        </h3>
                        <hr />
                        <h3 className='mt-5'>
                            Singers : - <span className='text-teal-600 italic'>{currentSong.singers}</span>
                        </h3>
                        <hr />
                        <h3 className='mt-5'>
                            StarCasts : - <span className='text-teal-600 italic'>{currentSong.starCast}</span>
                        </h3>
                        <hr />
                        <h3 className='mt-5'>
                            Music Composer : - <span className='text-teal-600 italic'>{currentSong.composedBy}</span>
                        </h3>
                        <hr />
                        <h3 className='mt-5'>
                            Released Year : - <span className='text-teal-600 italic'>{currentSong.year}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleSong
