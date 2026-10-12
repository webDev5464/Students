/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './modules/Navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function UserIndex() {

  const { process } = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (process) {
      navigate('/login')
    }
  }, [process])

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}
