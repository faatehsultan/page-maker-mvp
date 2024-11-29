import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import PageBuilder from "./pages/PageBuilder"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/builder" element={<PageBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
