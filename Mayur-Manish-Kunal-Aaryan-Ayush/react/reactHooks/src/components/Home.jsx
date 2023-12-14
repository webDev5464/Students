import { useContext } from "react";
import MyCard from "./hooks/MyCard";
import { MyContext } from "../App";

export default function Home() {
  const { themeButton, chagan } = useContext(MyContext)

  return (
    <>
      <button onClick={themeButton}>Click</button>

      <MyCard magan={{
        heading: chagan,
        title: "Lorem ipsum dolor sit amet.",
        price: 499,
        discount: 45
      }} />

      <MyCard magan={{
        heading: "My template",
        title: "Lorem ipsum dolor sit amet.",
        price: 99,
        discount: 20
      }} />
    </>
  )
}

