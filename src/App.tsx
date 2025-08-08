import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
