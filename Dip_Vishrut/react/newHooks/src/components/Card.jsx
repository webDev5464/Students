const Card = ({ MyProps }) => {
  return (
    <div>
      <div>
        {/* Heading */}
        <h1>{MyProps.heading}</h1>
        {/* title */}
        <p>{MyProps.title}</p>
      </div>
    </div>
  )
}

export default Card