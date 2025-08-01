import roomImg from "../assets/room.jpg"
import MyProps from "./MyProps"

export default function Home() {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>This is a Home page</h1>

      <img src={roomImg} alt="" style={{ width: 500 }} />

      <MyProps myValue={{ heading: "Hello World", title: "This is a title", price: 999 }} />
    </>
  )
}