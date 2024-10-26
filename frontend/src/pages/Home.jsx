import Footer from "../components/Footer";
import Header from "../components/Header";
import InputPesquisar from "../components/InputPesquisar";
import "./Home.css";
import ListaAvaliacao from "./ListaAvaliacao";

function Home() {
    return (
        <>
            <Header />
            <div className="home-container">
                <InputPesquisar />
                <ListaAvaliacao />
            </div>

            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default Home;