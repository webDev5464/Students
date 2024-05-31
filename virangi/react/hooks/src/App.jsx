import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navigation from "./modules/Navigation"
import MyUseState from "./hooks/MyUseState"
import MyUseEffect from "./hooks/MyUseEffect"

const App = () => {
  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MyUseState" element={<MyUseState />} />
          <Route path="MyUseEffect" element={<MyUseEffect />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App

// npm i react-router-dom