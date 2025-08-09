import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import CartDrawer from "./components/CartDrawer"; // <- add

function App() {
  return (
    <BrowserRouter>
      {/* Drawer fica aqui para aparecer em todas as rotas */}
      <CartDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
