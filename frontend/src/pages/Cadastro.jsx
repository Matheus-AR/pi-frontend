import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import Titulo from "../components/Titulo";
import "./Cadastro.css";
import FormCadastro from "./FormCadastro";
import { criarUsuario } from "../services/UsuarioService";

function Cadastro() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");
  const criarNovoUsuario = async (dados) => {
    const resposta = await criarUsuario(dados);
    if (resposta.sucesso) {
        setErro("");
        navigate("/");
    } else {
        setErro(resposta.mensagem);
    }
  };
  const voltar = () => {
    navigate("/");
  };
  return (
    <main className="cadastro-container">
      <Titulo texto="Cadastro" />
      {erro && <p className="error">{erro}</p>}
      <FormCadastro dados={{}} enviar={criarNovoUsuario} />
      <Botao tipo="button" texto="Voltar" onClick={voltar} />
    </main>
  );
}

export default Cadastro;
