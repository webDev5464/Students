import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GrClose } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MainContext } from '../App';
import { FaPlayCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlay } from "react-icons/fa6";

const Search = () => {

  const { songs } = useContext(MainContext)
  let [trending, setTrending] = useState([])

  useEffect(() => {
    let TRENDING = songs.filter((x) => x.category == 'New Releases')
    setTrending(TRENDING)

    AOS.init();
  }, [])

  return (
    <>
      <div className='relative'>
        <div data-aos='zoom-in-down' data-aos-duration='1000' className='absolute -top-40 left-72 border-2 h-[500px] rounded-xl p-3 z-50 w-[60%] bg-slate-50'>
          <NavLink to={-1}><GrClose className='absolute right-0 top-2 text-md hover:text-teal-600 mr-2' /></NavLink>
          <div>
            <input type="search" name="" className='absolute left-14 bg-slate-50 outline-none text-teal-600 w-[90%] text-2xl' placeholder='' />
            <NavLink to={'searchpro'}><IoSearchOutline className='absolute text-teal-400 hover:text-teal-600 scale-90 text-2xl' /></NavLink>
          </div>
          <div className='absolute top-12 left-0 border-t-2 w-full'>
            <h3 className='text-xs font-bold mx-2 mt-5 text-slate-500'>TRENDING</h3>
            <div className='flex flex-wrap mx-2 gap-5 mt-5'>
              {
                trending.map((x) => {
                  return (
                    <div key={x.id} className="songs relative group cursor-pointer">
                      <img className='group w-36' src={x.audioImg} alt="" />
                      <h3 className='font-semibold text-slate-700'>{x.name}</h3>
                      <h3>Song</h3>
                      <div className='invisible group-hover:visible transition-all duration-500'>
                        <div className='absolute top-12 left-14 text-4xl'>
                          <FaPlay className='hover:scale-125 text-white px-2 py-2 rounded-full bg-gray-900' />
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

      </div>

    </>
  )
}

export default Search
