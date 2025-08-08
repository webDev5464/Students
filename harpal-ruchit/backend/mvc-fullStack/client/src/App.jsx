import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getData } from './redux/slices/User.slice'

export default function App() {
  const { data } = useSelector(s => s.userSlice)
  const dispatch = useDispatch()
  console.log(data)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      {
        data.map((e) => (
          <div key={e._id}>
            <h1 key={e.id}>{e.fname}</h1>
            <button onClick={() => dispatch(deleteUser({ id: e._id }))}>Delete User</button>
          </div>
        ))
      }
    </div>
  )
}
