import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Cadastro.css";
import Botao from "../components/Botao";
import Titulo from "../components/Titulo";
import FormCadastro from "./FormCadastro";
import { AuthContext } from "../contexts/AuthContext";

function Cadastro() {
  const navigate = useNavigate();
  const { registrar } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const onEnviar = async (dados) => {
    setMsg("");
    const erro = await registrar(dados);
    if (erro) {
      setMsg("");
    } else {
      navigate("/");
    }
  };
  const voltar = () => {
    navigate("/");
  };
  return (
    <main className="cadastro-container">
      <Titulo texto="Cadastro" />
      {msg && <p className="error">{msg}</p>}
      <FormCadastro dados={{}} onEnviar={onEnviar} />
      <Botao tipo="button" texto="Voltar" onClick={voltar} />
    </main>
  );
}

export default Cadastro;
