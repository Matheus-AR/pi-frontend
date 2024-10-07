import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import Titulo from "../components/Titulo";
import "./Cadastro.css";
import FormCadastro from "./FormCadastro";

function Cadastro() {
    const navigate = useNavigate();

    const voltar = () => {
        navigate("/");
    }
    return (
        <main className="cadastro-container">
            <Titulo texto="Cadastro" />
            <FormCadastro />
            <Botao tipo="button" texto="Voltar" onClick={voltar} />
        </main>
    )
}

export default Cadastro;