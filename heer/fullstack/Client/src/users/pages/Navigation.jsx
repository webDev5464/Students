import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { $UserLogout } from '../../redux/Thunk/Auth.thunk'

export default function Navigation() {
    const dispatch = useDispatch()
    const { userData } = useSelector(x => x.AuthData)
    return (
        <>
            <div className='flex items-center justify-between px-10 py-3'>
                <nav>
                    <div className='font-bold'>
                        <h1>Jatssdev Store</h1>
                    </div>
                </nav>

                <div>
                    <ul className='flex items-center gap-10'>
                        <li><NavLink to="/">HOME </NavLink></li>

                        {userData ?
                            <>
                                <button className='button red-500-50' onClick={() => dispatch($UserLogout())}>Logout</button>
                            </> :
                            <>
                                <li><NavLink to="/UserRegister">REGISTER </NavLink></li>
                                <li><NavLink to="/UserLogin">LOGIN</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div >
        </>
    )
}