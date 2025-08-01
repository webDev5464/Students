import React, { useState } from 'react'
import '../Styles/Home.css'

export default function Home() {
    const [theme, settheme] = useState({
        color: '',
        background: '',
        userName: '',
        contry: '',
    })




    return (
        <div id='main'>
            <form action="">
                <div id='left-side' >
                <label htmlFor="font-color" ><b>Font-color : </b></label>
                <input id='font-color' type="text" placeholder='Enter font-color' onChange={(e) => settheme({ ...theme, color: e.target.value })} required/>
                <hr />

                <label htmlFor="background-color" ><b>Background-color : </b></label>
                <input id='background-color' type="text" placeholder='Enter background' onChange={(e) => settheme({ ...theme, background: e.target.value })} />
                <hr />

                <label htmlFor="userName" ><b>Username : </b></label>
                <input id='userName' type="text" placeholder='Enter Your Name ' onChange={(e) => settheme({ ...theme, userName: e.target.value })} />
                <hr />

                <label htmlFor="Country" ><b>Country : </b></label>
                <input id='Country' type="text" placeholder='Enter Country Name ' onChange={(e) => settheme({ ...theme, contry: e.target.value })} />
                <hr />

                <label htmlFor="Proffesion" ><b>Proffesion : </b></label>
                <input id='Proffesion' type="text" placeholder='Enter Your Proffesion ' onChange={(e) => settheme({ ...theme, Proffesion: e.target.value })} />
                <hr />

                <label htmlFor="Detailed" ><b>About You : </b></label>
                <input id='Detailed' type="text" placeholder='Enter Your Detailed ' onChange={(e) => settheme({ ...theme, about: e.target.value })} />
                <hr />
                <label htmlFor="links" ><b>Links : </b></label>

                <input id='links' type="text" placeholder='Enter Your Instagram Link ' onChange={(e) => settheme({ ...theme, insta: e.target.value })} required/>
                <input id='links' type="text" placeholder='Enter Your Github Link ' onChange={(e) => settheme({ ...theme, github: e.target.value })} />
                <input id='links' type="text" placeholder='Enter Your Linkedin link ' onChange={(e) => settheme({ ...theme, linkedin: e.target.value })} />

                <hr />

            </div>
            </form>

            <div id='right-side' style={{ width: `${theme.width}px`, backgroundColor: theme.background, height: `${theme.height}px` }}>
                <div className="detail">
                    <h1>{theme.userName}</h1>
                    <h2>{theme.contry}</h2>
                    <p>{theme.Proffesion}</p>

                    <p className='about'>{theme.about}</p>
                    <div className="links">
                        <a href={theme.insta}><i class="fa-brands fa-instagram"></i></a>
                        <a href={theme.github}><i class="fa-brands fa-github"></i></a>
                        <a href={theme.linkedin}><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div >
    )
}
