/* eslint-disable react/prop-types */
const MyPropsCard = ({ card }) => {
  return (
    <div style={{ border: "2px solid black", marginBottom: 10 }}>
      <div>
        {/* Heading */}
        <h2>{card.heading}</h2>
      </div>

      <div>
        {/* Title */}
        <p>{card.title}</p>
        {/* Description */}
        <p>{card.desc}</p>
      </div>
    </div>
  )
}

export default MyPropsCard
