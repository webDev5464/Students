import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import GlobContext from '../users/modules/GlobContext'

function AdminINdex() {

  const navigate = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin')
    } else {
      navigate('/admin/login')
    }
  }, [])

  return (
    <GlobContext>
      <Outlet />
    </GlobContext>
  )
}

export default AdminINdex
