import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";
import Avaliacao from "./pages/Avaliacao";
import Perfil from "./pages/Perfil";
import CriarAvaliacao from "./pages/CriarAvaliacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/avaliacao/:id" element={<Avaliacao />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/esqueci" element={<EsqueciSenha />} />
        <Route path="/criaravaliacao" element={<CriarAvaliacao />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
