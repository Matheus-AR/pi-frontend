import Footer from "../components/Footer";
import Header from "../components/Header";
import FormCriarAvaliacao from "./FormCriarAvaliacao";
import "./CriarAvaliacao.css";

function CriarAvaliacao() {
    return (
        <>
            <Header />
            <div className="criarAvalicao-container">
                <FormCriarAvaliacao />
            </div>
            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default CriarAvaliacao;