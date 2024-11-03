import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoAvaliacao from "../components/InfoAvaliacao";
import "./Avaliacao.css";
import { buscarUmaAvaliacao } from "../services/AvalicaoService";

function Avaliacao() {
  const { id } = useParams();
  const [avaliacao, setAvaliacao] = useState({});
  const [erro, setErro] = useState("");

  const carregar = async (id) => {
    const resposta = await buscarUmaAvaliacao(id);
    if (resposta.sucesso) {
      setAvaliacao(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar(id);
  }, [id]);
  console.log(avaliacao);
  return (
    <>
      <Header />
      <div className="conteudo-avaliacao">
        {erro && <p className="error">{erro}</p>}
        <InfoAvaliacao
          nome={avaliacao.nome}
          autor={avaliacao.autor}
          descricao={avaliacao.descricao}
        />
      </div>

      <Footer texto="Copyright (C) 2024" />
    </>
  );
}

export default Avaliacao;
