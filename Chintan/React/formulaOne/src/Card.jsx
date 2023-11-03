/* eslint-disable react/prop-types */
export default function Card({ props }) {
  return (
    <div style={myCard.card}>
      <div>
        <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} />
      </div>
      <div>
        <h2>{props.cardHeading}</h2>
        <p>{props.cardTitle}</p>
        <p>{props.cartArticle}</p>
      </div>
    </div>
  )
}

const myCard = {
  card: {
    backgroundColor: "lightgray",
    width: 400,
    border: "2px solid black",
  }
}