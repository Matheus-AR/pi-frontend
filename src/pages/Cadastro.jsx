import Botao from "../components/Botao";
import Input from "../components/Input";
import Titulo from "../components/Titulo";
import "./Cadastro.css";

function Cadastro() {
    return (
        <main className="cadastro-container">
            <Titulo texto="Cadastro" />
            <Input tipo="text" id="nome" texto="Nome" />
            <Input tipo="email" id="email" texto="E-mail" />
            <Input tipo="password" id="senha" texto="Senha" />
            <Botao texto="Entrar" />
        </main>
    )
}

export default Cadastro;