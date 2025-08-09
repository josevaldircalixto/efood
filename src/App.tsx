import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <BrowserRouter>
      <CartDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
