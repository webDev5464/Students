import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { HiDotsHorizontal } from "react-icons/hi";
import { MainContext } from '../App';
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const { songs, playPause } = useContext(MainContext)
    const [queueSong, setQueuesongs] = useState([])
    const [showArrow, setShowArrow] = useState(false)

    useEffect(() => {
        let QUEUE = songs.filter((x) => x.category == 'Devotional')
        setQueuesongs(QUEUE)
    }, [])

    return (
        <>
            <div className="sticky z-50 top-0 border-b-2 bg-gray-100 grid grid-cols-3 items-center justify-around py-2">
                <div className="bg-gray-100 overflow-scroll fixed top-[14%] z-50 -right-[25%] hover:-right-0 transition-all duration-500  w-[30%] h-[60vh] max-h-[100vh] rounded-xl shadow-lg">
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold px-2 py-5 text-gray-500'>Queue</h3>
                        <div className='mr-5 flex gap-1 '>
                            <HiDotsHorizontal className='mt-2 mr-3 cursor-pointer text-2xl text-gray-500' />
                            <button className='mr-2 border-2 px-4 rounded-full text-white bg-teal-500 hover:bg-teal-600 py-1 font-semibold transition-all duration-300 '>Save</button>
                            <button className='mr-2 border-2 px-4 rounded-full text-gray-500 py-1 hover:border-teal-600 hover:text-teal-600 font-semibold transition-all duration-300'>Clear</button>
                        </div>
                    </div>
                    <hr />
                    <div className=''>
                        {
                            queueSong.map((x) => {
                                return (
                                    <div key={x.id} className='relative group cursor-pointer flex items-center mx-5 gap-5  mt-5 justify-between'>
                                        <div className='flex'>
                                            <img src={x.audioImg} className='w-12 group' alt="" />
                                            <div className='invisible group-hover:visible'>
                                                <FaPlay onClick={() => playPause(x.id)} className='absolute top-[2%] -left-[-0%] text-5xl text-white border-2 rounded-xl px-2 py-2' />
                                            </div>
                                            <div className='w-52 mx-2'>
                                                <h3 className='truncate text-sm font-semibold text-gray-600'>{x.name}</h3>
                                                <div>
                                                    <h3 className='truncate text-sm text-gray-600'>{x.singers}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <FaRegHeart />
                                        </div>
                                        <div>
                                            <h3><HiDotsHorizontal /></h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='relative flex py-2 px-3 items-center'>
                    <NavLink to={'/'}>
                        <img src="./src/img/icons/jiosaavn-logo.png" className='w-28' alt="logo-button" />
                    </NavLink>
                    <div className='relative group  list-none ml-5'>
                        <li className='cursor-pointer font-semibold'>Music</li>
                        <div className='invisible transition-all duration-300 group-hover:visible w-[58vw] h-[75vh] absolute top-12 left-0 bg-white rounded-lg  px-4 py-5'>
                            <h3 className='text-2xl font-semibold text-slate-800'>What's Hot on JioSaavn</h3>
                            <hr className='mt-5' />
                            <div className='grid grid-cols-3 gap-16 mt-8'>
                                <div className='w-60'>
                                    <h3 className='text-xs font-sans font-semibold text-slate-800'>NEW RELEASES</h3>
                                    <p className='mt-4 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Heer Aasmani (From "Fighter")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Raat Akeli Thi (From "Merry Christmas")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Laal Peeli Akhiyaan (From "Teri Baaton Mein Aisa Uljha Jiya")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Nazar Teri Toofan (From "Merry Christmas")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Ishq Jaisa Kuch (From "Fighter")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Merry Christmas (Title Track) (From "Merry Christmas")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Sher Khul Gaye (From "Fighter")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Dunki</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Bottley Kholo (From "Kuch Khattaa Ho Jaay")</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold hover:text-black text-slate-800'>Ram Dhun (From "Main Atal Hoon")</p>
                                </div>
                                <div>
                                    <h3 className='text-xs font-sans font-semibold text-slate-800'>TOP PLAYLISTS</h3>
                                    <p className='mt-4 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Most Streamed Love Songs: Hindi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Weekly Top Songs - Hindi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Surprise Me</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Best Of Dance - Hindi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Let's Play - Arijit Singh - Hindi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Chill Maaro</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Best Of Rock - Hindi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Best Of Sad Songs: 2000s</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Wow Winters - Mausam Mastana</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Most Searched Songs - Hindi</p>
                                </div>
                                <div>
                                    <h3 className='text-xs font-sans font-semibold text-slate-800'>TOP ARTISTS</h3>
                                    <p className='mt-4 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Lata Mangeshkar</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Akshay Kumar</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Emraan Hashmi</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Shah Rukh Khan</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Udit Narayan</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Jubin Nautiyal</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Alka Yagnik</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Arijit Singh</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Kiara Advani</p>
                                    <p className='mt-3 text-xs cursor-pointer font-semibold text-slate-800 hover:text-black'>Sidharth Malhotra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className='flex gap-5 mx-5 text-gray-800'>
                        <li className='cursor-pointer font-semibold'>Podcasts</li>
                        <li className='cursor-pointer font-semibold'>Go Pro</li>
                    </ul>
                </div>
                <div className='relative'>
                    <NavLink to={'search'}><input type="search" placeholder='Search' className='px-3 text-slate-800 outline-none rounded-full py-2 w-full text-center' name="" id="" />
                        <CiSearch className='text-lg absolute top-[25%] left-[39%]' />
                    </NavLink>

                </div>
                <div className='text-right mx-10'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div onClick={() => setShowArrow(!showArrow)}>
                            <Menu.Button id='lan-list' className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900">
                                Music Languages
                                {
                                    showArrow ? <ChevronUpIcon className="-mr-1 h-5 w-5 text-gray-900" aria-hidden="true" id='show-more' /> : <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900" aria-hidden="true" id='show-less' />
                                }

                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-3 w-72 px-5 py-4 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <h3 className='text-md font-semibold text-slate-800'>What music do you like?</h3>
                                    <p className='text-xs italic text-slate-800'>Pick all the languages you want to listen to.</p>

                                    <div className='grid grid-cols-2 mt-5 -mx-5 w-72'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={classNames(
                                                        active ? ' text-emerald-500' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Hindi
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    English
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Punjabi
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Tamil
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Telugu
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Marathi
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Gujarati
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Bengali
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Kannada
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Bhojpuri
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Malyalam
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Urdu
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Haryanvi
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Rajasthani
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Odia
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-gray-900' : 'text-gray-700',
                                                        'px-5 w-full hover:text-teal-500 transition-all duration-500 border-gray-50 font-bold py-3 text-sm border border-1'
                                                    )}
                                                >
                                                    Assamese
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <button className='bg-teal-500 px-24 rounded-2xl py-1 text-white font-semibold mt-5'>Update</button>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <button className='mx-2 font-semibold text-slate-800'>Log In</button>
                    <button className='mx-2 font-semibold text-slate-800'>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
