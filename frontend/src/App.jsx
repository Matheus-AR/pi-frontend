import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";
import Avaliacao from "./pages/Avaliacao";
import Perfil from "./pages/Perfil";
import CriarAvaliacao from "./pages/CriarAvaliacao";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { usuario } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {usuario.logado ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/avaliacao/:id" element={<Avaliacao />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/criaravaliacao" element={<CriarAvaliacao />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/esqueci" element={<EsqueciSenha />} />
          </>
        )}
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
