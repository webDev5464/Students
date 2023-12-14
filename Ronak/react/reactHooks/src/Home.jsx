import MyCard from "./hooks/MyCard";

export default function Home() {
  const cards = [
    {
      id: 1,
      heading: "Heading 1",
      title: "Title 1",
      price: 11,
      discount: 50
    },
    {
      id: 2,
      heading: "Heading 2",
      title: "Title 2",
      price: 11,
      discount: 50
    },
    {
      id: 3,
      heading: "Heading 3",
      title: "Title 3",
      price: 11,
      discount: 50
    },
    {
      id: 4,
      heading: "Heading 4",
      title: "Title 4",
      price: 11,
      discount: 50
    },
    {
      id: 5,
      heading: "Heading 5",
      title: "Title 5",
      price: 11,
      discount: 50
    },
  ]

  return (
    <div>
      {cards.map((x) => (
        <div key={x.id}>
          <MyCard MyProps={{
            heading: x.heading,
            title: x.title,
            price: x.price,
            discount: x.discount
          }} />
        </div>
      ))}
    </div>
  )
}
