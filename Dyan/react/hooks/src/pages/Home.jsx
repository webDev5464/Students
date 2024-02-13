import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to={'https://themewagon.com/'} target="_blank">ThemeWagon</Link>
      <h1>This is a Home page</h1>
    </>
  )
}