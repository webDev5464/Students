import React from 'react'

function MyPropsCard({ myValue }) {
  return (
    <div>
      <h1>{myValue.heading}</h1>
      <p>{myValue.title}</p>
      <img src={myValue.img} alt="" width={myValue.imgWidth} />
    </div>
  )
}

export default MyPropsCard