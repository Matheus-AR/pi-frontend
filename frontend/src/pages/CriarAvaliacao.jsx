import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FormCriarAvaliacao from "./FormCriarAvaliacao";
import "./CriarAvaliacao.css";
import { criarAvaliacao } from "../services/AvalicaoService";
import { AuthContext } from "../contexts/AuthContext";

function CriarAvaliacao() {
    const {usuario} = useContext(AuthContext);

  const [erro, setErro] = useState();
  const navigate = useNavigate();
  const onSalvar = async (data) => {
    data.autor = usuario.nome;
    const resposta = await criarAvaliacao(data);
    if (resposta.sucesso) {
      setErro("");
      navigate(`/perfil/${usuario.id}`);
    } else {
      setErro(resposta.mensagem);
    }
  };
  return (
    <>
      <Header />
      <div className="criarAvalicao-container">
        {erro && <p>{erro}</p>}
        <FormCriarAvaliacao dados={{}} onSalvar={onSalvar} />
      </div>
      <Footer texto="Copyright (C) 2024" />
    </>
  );
}

export default CriarAvaliacao;
