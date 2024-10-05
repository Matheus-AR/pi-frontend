import Botao from "../components/Botao";
import Titulo from "../components/Titulo";
import "./Cadastro.css";
import FormCadastro from "./FormCadastro";

function Cadastro() {
    return (
        <main className="cadastro-container">
            <Titulo texto="Cadastro" />
            <FormCadastro />
            <Botao texto="Voltar" />
        </main>
    )
}

export default Cadastro;