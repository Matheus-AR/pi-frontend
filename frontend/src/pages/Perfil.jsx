import { useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPerfil from "./FormPerfil";
import ListaAvaliacao from "./ListaAvaliacao";
import "./Perfil.css";

function Perfil() {
    const navigate = useNavigate();
    const navega = () => {
        navigate("/criaravaliacao");
    }
    return (
        <>
            <Header />
            <div className="perfil-container">
                <Botao tipo="button" texto="Criar avaliação" onClick={navega} />
                <section className="perfil-section">
                    <FormPerfil />
                    <ListaAvaliacao />
                </section>
            </div>

            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default Perfil;