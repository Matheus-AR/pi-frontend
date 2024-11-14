import { createContext, useState } from "react";
import { alterar, autenticar, criarUsuario } from "../services/UsuarioService";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: "",
    logado: false,
  });
  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        nome: resposta.dados.user.nome,
        email: dados.email,
        logado: true,
      });
    } else {
      return resposta.mensagem;
    }
    return "";
  };

  const logout = () => {
    setUsuario({ email: "", logado: false });
  };

  const registrar = async (dados) => {
    const resposta = await criarUsuario(dados);
    if (resposta.sucesso) {
      setUsuario({ email: dados.email });
    } else {
      return resposta.mensagem;
    }
    return "";
  };

  const atualizarUsuario = async (dados) => {
    const resposta = await alterar(dados);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        nome: resposta.dados.user.nome,
        email: dados.email,
        logado: true,
      });
    } else {
      return resposta.mensagem;
    }
    return "";
  };

  const contexto = {
    usuario,
    login,
    logout,
    registrar,
    atualizarUsuario,
  };
  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
