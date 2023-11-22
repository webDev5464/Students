import { useContext } from "react";
import Output from "./Output";
import { MyContext } from "./App";

export default function Home() {
  const { value } = useContext(MyContext)
  return (
    <>
      <h1>{value}</h1>

      <Output />
    </>
  )
}