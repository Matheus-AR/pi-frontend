import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoAvaliacao from "../components/InfoAvaliacao";
import "./Avaliacao.css";

function Avaliacao() {
    return (
        <>
            <Header />
            <div className="conteudo-avaliacao">
                <InfoAvaliacao nome="Produto 1" autor="Autor 1" descricao="Descrição do produto" />
            </div>

            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default Avaliacao;