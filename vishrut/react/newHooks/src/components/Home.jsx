import Card from "./Card";

export default function Home() {

  return (
    <>
      <Card MyProps={{
        heading: "This is a heading",
        title: "This is a article"
      }} />

      <Card MyProps={{
        heading: "Another Heading",
        title: "Another title"
      }} />
    </>
  )
}