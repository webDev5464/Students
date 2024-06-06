import { useEffect, useRef, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function MyUseRef() {
  const autoFocus = useRef()
  const goToTop = useRef()

  const [reload, setReload] = useState(true)

  useEffect(() => {
    autoFocus.current.focus()
  }, [reload])

  return (
    <>
      <div ref={goToTop}></div>

      <input type="text" ref={autoFocus} />
      <button onClick={() => setReload(!reload)}>Click focus</button>

      <hr />

      <NestingNavigation />
      <Outlet />

      <div style={{ height: "300vh" }}></div>


      <button onClick={() => goToTop.current?.scrollIntoView({ behavior: "smooth" })}>Go to Top</button>
    </>
  )
}

function NestingNavigation() {
  const defaultShow = useRef()

  useEffect(() => {
    defaultShow.current.click()
  }, [])

  return (
    <>
      <ul>
        <li><NavLink to={'childOne'}>Child One</NavLink></li>
        <li><NavLink to={'childTwo'} ref={defaultShow}>Child Two</NavLink></li>
      </ul>
    </>
  )
}
