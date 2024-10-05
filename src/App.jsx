import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/avaliacao" element={<h1>AVALIAÇÃO</h1>} />
            <Route path="/perfil" element={<h1>Perfll</h1>} />
            <Route path="/esqueci" element={<h1>Recupere sua senha</h1>} />
            <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
