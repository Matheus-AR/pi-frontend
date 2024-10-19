import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPerfil from "./FormPerfil";
import ListaAvaliacao from "./ListaAvaliacao";
import "./Perfil.css";

function Perfil() {
    return (
        <>
            <Header />
            <div className="perfil-container">
                <FormPerfil />
                <ListaAvaliacao />
            </div>

            <Footer texto="Copyright (C) 2024" />
        </>
    )
}

export default Perfil;