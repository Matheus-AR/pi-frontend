import Footer from "../components/Footer";
import Header from "../components/Header";
import InputPesquisar from "../components/InputPesquisar";
import ResumoAvaliacao from "../components/ResumoAvaliacao";
import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <div className="conteudo-container">
                <InputPesquisar />
                <ResumoAvaliacao titulo="Avaliação 1" descricao="Descrição da avaliação"  />
                <ResumoAvaliacao titulo="Avaliação 2" descricao="Descrição da avaliação"  />
                <ResumoAvaliacao titulo="Avaliação 3" descricao="Descrição da avaliação"  />
                <ResumoAvaliacao titulo="Avaliação 4" descricao="Descrição da avaliação"  />
            </div>

            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default Home;