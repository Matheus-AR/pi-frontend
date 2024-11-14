/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPerfil from "./FormPerfil";
import ListaAvaliacao from "./ListaAvaliacao";
import "./Perfil.css";
import { buscarPorAutor } from "../services/AvalicaoService";
import { AuthContext } from "../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const { usuario, atualizarUsuario } = useContext(AuthContext);

  const { id } = useParams();

  const onEnviar = async (dados) => {
    setMsg("");
    const erro = await atualizarUsuario({ id, ...dados });
    if (erro) {
      setMsg(erro);
    } else {
        navigate("/");
    }
  };

  const navegaAvaliacao = (id) => {
    navigate(`/avaliacao/${id}`);
  };

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [erro, setErro] = useState("");

  const carregar = async () => {
    const resposta = await buscarPorAutor(usuario.nome);
    if (resposta.sucesso) {
      setAvaliacoes(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, [usuario.nome]);

  return (
    <>
      <Header />
      <div className="perfil-container">
        <NavLink className="btn-criarAvaliacao" to="/criaravaliacao">
          Criar Avaliação
        </NavLink>
        <section className="perfil-section">
          <FormPerfil
            onEnviar={onEnviar}
            valores={{ email: usuario.email, nome: usuario.nome }}
            msg={msg}
          />
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
