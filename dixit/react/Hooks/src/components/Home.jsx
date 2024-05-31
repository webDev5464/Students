export default function Home() {
  return (
    <>
      <div style={card.parent}>
        <h1 style={card.heading}>This is a Home Page.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fuga?</p>
      </div>
    </>
  )
}

const card = {
  parent: {
    border: "2px solid black",
    width: 500,
    padding: 10,
    backgroundColor: "black",
    color: "white"
  },
  heading: {
    color: "tomato",
    paddingBottom: 10
  }
}