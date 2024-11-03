import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPerfil from "./FormPerfil";
import ListaAvaliacao from "./ListaAvaliacao";
import "./Perfil.css";
import { buscarAvaliacoes } from "../services/AvalicaoService";

function Perfil() {
  const navigate = useNavigate();
  const navegaAvaliacao = (id) => {
    navigate(`/avaliacao/${id}`);
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
        <NavLink className="btn-criarAvaliacao" to="/criaravaliacao">
          Criar Avaliação
        </NavLink>
        <section className="perfil-section">
          <FormPerfil />
          {console.log(avaliacoes)}
          {avaliacoes.length ? (
            <>
              {erro && <p>{erro}</p>}
              <ListaAvaliacao
                itens={avaliacoes}
                navega={() => navegaAvaliacao}
              />
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
