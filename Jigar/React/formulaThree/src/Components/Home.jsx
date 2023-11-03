import { useContext } from "react";
import PersonData from "./PersonData";
import { MyContext } from "../App";
import ChildHome from "./ChiledHome";

export default function Home() {

  const { Heading } = useContext(MyContext)

  return (
    <>
      <h1>This is a Home page. {Heading}</h1>

      <UsingPropsMethod />

      <ChildHome />
    </>
  )
}

function UsingPropsMethod() {
  return (
    <>
      <PersonData personValue={{
        fname: "John",
        lname: "Doe",
        email: "johnDoe@gmail.com"
      }} />

      <PersonData personValue={{
        fname: "Smith",
        lname: "Robot",
        email: "smith@gmail.com"
      }} />
    </>
  )
}