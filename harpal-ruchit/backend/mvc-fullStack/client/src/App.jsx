import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getData, resetProcess } from './redux/slices/User.slice'

export default function App() {
  const { data, process } = useSelector(s => s.userSlice)
  const dispatch = useDispatch()
  console.log(data)

  useEffect(() => {
    dispatch(getData())
    dispatch(resetProcess())
  }, [process])

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
