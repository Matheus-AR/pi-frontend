import Titulo from "../components/Titulo";
import "./EsqueciSenha.css";
import FormEsqueciSenha from "./FormEsqueciSenha";

function EsqueciSenha() {
    return (
        <main className="container-esqueci-senha">
            <Titulo texto="Esqueceu a senha?" />
            <FormEsqueciSenha />
        </main>
    )
}

export default EsqueciSenha;