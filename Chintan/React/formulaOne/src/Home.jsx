import { useEffect, useState } from 'react'
import TitleCounter from './TitleCounter'
import Card from './Card'
import cardMountain from "./mountaine.jpg"

export default function Home() {
  const [val, setVal] = useState(0)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setVal((x) => x + 1)
    })
  }, [])

  useEffect(() => {
    setCount(() => count * 2)
  })

  return (
    <>
      <h1>{val}</h1>

      <h3>{count}</h3>

      <button onClick={() => setCount((x) => x + 1)}>Click Me</button>

      <h2>Selected Color {color}</h2>

      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("blue")}>blue</button>

      <hr />
      <hr />

      <TitleCounter />

      <hr />

      <Card props={{
        imgSrc: "https://res.cloudinary.com/dpiiduvvx/image/upload/v1697702987/cld-sample-3.jpg",
        imgWidth: 400,
        cardHeading: "Card One",
        cardTitle: "Lorem ipsum dolor sit amet.",
        cartArticle: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo quam earum, itaque expedita non vero ut saepe provident tempore corrupti eum debitis, nobis sequi repudiandae nisi nam obcaecati? Reiciendis.`
      }} />

      <Card props={{
        imgSrc: cardMountain,
        imgWidth: 400,
        cardHeading: "Card Two",
        cardTitle: "Lorem ipsum dolor sit amet.",
        cartArticle: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo quam earum, itaque expedita non vero ut saepe provident tempore corrupti eum debitis, nobis sequi repudiandae nisi nam obcaecati? Reiciendis.`
      }} />
    </>
  )
}

/*

main > App > Home > Card

*/