import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Precos } from "@/pages/Precos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preços" element={<Precos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
