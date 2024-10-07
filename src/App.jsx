import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/avaliacao" element={<h1>AVALIAÇÃO</h1>} />
            <Route path="/perfil" element={<h1>Perfll</h1>} />
            <Route path="/esqueci" element={<EsqueciSenha />} />
            <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
