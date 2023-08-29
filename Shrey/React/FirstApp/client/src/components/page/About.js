// import MyImage from '../img/myImg.jpg'
import mySong from '../audio/music-one.mp3'
import React, { useContext } from 'react'
import HomeTwo from './HomeTwo'
import { MyContext } from '../../App'

function About() {
    const ImageLink = 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q='
    // const changeTheme = useRef()

    // const myBtn = () => {
    //     changeTheme.current.style.backgroundColor = "red"
    //     changeTheme.current.style.color = "white"
    // }

    const theme = useContext(MyContext)

    return (
        <div ref={theme.changeTheme}>
            <h1>About Page</h1>

            {/* <img src={MyImage} alt="" /> */}

            <img src={ImageLink} alt="" />

            <audio src={mySong} controls muted></audio>
            <HomeTwo myHeading="This is a About Page." myP="lorem lorem lorem" />

            <button onClick={theme.myBtn}>Click Me!</button>
        </div>
    )
}

export default About
