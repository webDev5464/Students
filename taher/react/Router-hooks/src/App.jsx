// npm i react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navigation from './pages/Navigation'
import MyUseState from "./pages/MyUseState"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MyUseState" element={<MyUseState />} />
        </Routes>
      </main>

      {/* <footer>THis is a footer</footer> */}

    </BrowserRouter>
  )
}