import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUsers } from './redux/thunk/Apis'
import { useDispatch, useSelector } from 'react-redux'
// npm i axios

export default function GetData() {

  const dispatch = useDispatch()

  // const [userData, setUserData] = useState([])

  // const dataGet = async () => {
  //   const rowData = await fetch("https://authapiforfront.jatssdev.com/api/getusers")
  //   const data = await rowData.json()
  //   setUserData(data)
  // }

  // dataGet()

  // -----------------------------------------

  // const dataGet = async () => {
  //   const users = await axios.get("https://authapiforfront.jatssdev.com/api/getusers")
  //   setUserData(users.data)
  // }

  // dataGet()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const { userData } = useSelector(s => s.user)

  return (
    <div>
      {userData ? userData.map((e) => (
        <div key={e._id}>
          <p>{e.username}</p>
        </div>
      )) : ''}
    </div>
  )
}
