import { useContext, useState } from "react";
import Link from "../components/Link";
import Titulo from "../components/Titulo";
import FormLogin from "./FormLogin";

import "./Login.css";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
    const [msg, setMsg] = useState("");

  const { login } = useContext(AuthContext);

  const onEnviar = async (dados) => {
    setMsg("");
    const erro = await login(dados);
    if (erro) {
        setMsg(erro);
    }
  };
  return (
    <main className="login-container">
      <Titulo texto="Login" />
      <FormLogin onEnviar={onEnviar} />
      {msg && <p className="error">{msg}</p>}
      <Link url="/esqueci" texto="Esqueceu a senha?" />
      <Link url="/cadastro" texto="Criar uma conta?" />
    </main>
  );
}

export default Login;
