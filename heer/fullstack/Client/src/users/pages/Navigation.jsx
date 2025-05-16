import { NavLink } from 'react-router-dom'


export default function Navigation() {
    return (
        <>
            <div className='flex item-center justify-between'>
            <nav>
                <div className='font-bold'>
                    <h1> HEER WEBSITE </h1>
                </div>
                
            </nav>


            <div>
                <ul className='flex gap-10 px-10 py-2 '>
                    <li><NavLink to="/">HOME </NavLink></li>
                    <li><NavLink to="/UserRegister">REGISTER </NavLink></li>
                    <li><NavLink to="/UserLogin">LOGIN</NavLink></li>
                </ul>
            </div>
        </div >
        </>
    )
}