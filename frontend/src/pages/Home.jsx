import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InputPesquisar from "../components/InputPesquisar";
import "./Home.css";
import ListaAvaliacao from "./ListaAvaliacao";
import { buscarAvaliacoes } from "../services/AvalicaoService";

function Home() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [erro, setErro] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const navigate = useNavigate();

  const carregar = async () => {
    const resposta = await buscarAvaliacoes();
    if (resposta.sucesso) {
      setAvaliacoes(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  const navega = (id) => {
    navigate(`/avaliacao/${id}`);
  };
  
  const handlePesquisaChange = (valor) => {
    setPesquisa(valor);
  };

  const avaliacoesFiltradas = avaliacoes.filter((avaliacao) => avaliacao.nome.toLowerCase().includes(pesquisa.toLowerCase()));

  useEffect(() => {
    carregar();
  }, []);
  return (
    <>
      <Header />
      <div className="home-container">
        <InputPesquisar onChange={handlePesquisaChange} />
        {erro && <p className="error">{erro}</p>}
        <ListaAvaliacao itens={avaliacoesFiltradas} navega={() => navega} />
      </div>

      <Footer texto="Copyright (C) 2024" />
    </>
  );
}

export default Home;
