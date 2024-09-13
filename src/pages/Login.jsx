import Botao from "../components/Botao";
import Input from "../components/Input";
import Link from "../components/Link";
import Titulo from "../components/Titulo";


import "./Login.css";

function Login() {
    return (
        <main className="login-container">
            <Titulo texto="Login" />
            <Input tipo="email" id="email" texto="E-mail" />
            <Input tipo="password" id="senha" texto="Senha" />
            <Link texto="Esqueceu a senha?" />
            <Link texto="Criar uma conta?" />
            <Botao texto="Entrar" />
        </main>
    )
}

export default Login;