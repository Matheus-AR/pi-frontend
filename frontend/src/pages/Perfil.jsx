import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPerfil from "./FormPerfil";
import ListaAvaliacao from "./ListaAvaliacao";
import "./Perfil.css";
import { buscarAvaliacoes } from "../services/AvalicaoService";

function Perfil() {
  const navigate = useNavigate();
  const navega = () => {
    navigate("/criaravaliacao");
  };

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [erro, setErro] = useState("");

  const carregar = async () => {
    const resposta = await buscarAvaliacoes();
    if (resposta.sucesso) {
      setAvaliacoes(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <Header />
      <div className="perfil-container">
        <Botao tipo="button" texto="Criar avaliação" onClick={navega} />
        <section className="perfil-section">
          <FormPerfil />
          {console.log(avaliacoes)}
          {avaliacoes.length ? (
            <>
              {erro && <p>{erro}</p>}
              <ListaAvaliacao itens={avaliacoes} />
            </>
          ) : (
            <p className="aviso-avaliacao">Nenhuma avaliação!</p>
          )}
        </section>
      </div>

      <Footer texto="Copyright (C) 2024" />
    </>
  );
}

export default Perfil;
