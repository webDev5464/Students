import myImage from "../assets/mountain.jpg"

const myStyle = {
  card: {
    width: 400,
    border: "2px solid black",
    padding: 5,
    backgroundColor: "black",
    color: "white"
  },
  article: {
    fontSize: 22
  }
}

export default function Home() {
  return (
    <div style={myStyle.card}>
      <div>
        <img src={myImage} alt="" style={{ width: 400 }} />
      </div>
      <div>
        <h3>Mountain Image</h3>
        <p style={myStyle.article}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsum ad, quidem quaerat adipisci fuga quod distinctio officiis officia, laboriosam perferendis. Minima vitae ea consequuntur, omnis delectus eos rerum placeat.</p>
      </div>
    </div>
  )
}