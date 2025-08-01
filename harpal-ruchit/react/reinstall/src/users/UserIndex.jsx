import { Outlet } from 'react-router-dom'
import Navigation from './modules/Navigation'
import { createContext } from 'react'
import GlobContext from './modules/GlobContext'
import { ToastContainer } from 'react-toastify'

export const UserContext = createContext()

function UserIndex() {

  const user = "Chagan"
  const pass = "chsgshs"

  return (
    <GlobContext>
      <UserContext.Provider value={{ user, pass }}>
        <Navigation />

        <div className='pt-16'>
          <Outlet />
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </UserContext.Provider>
    </GlobContext>
  )
}

export default UserIndex
