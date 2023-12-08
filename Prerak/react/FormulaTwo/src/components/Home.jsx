import MyPropsCard from "../modules/MyPropsCard";

export default function Home() {
  return (
    <>
      <MyPropsCard card={{ heading: "Hello", title: "lorem", desc: "World" }} />

      <MyPropsCard card={{ heading: "This is a props Card" }} />
    </>
  )
}