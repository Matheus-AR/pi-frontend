import Link from "../components/Link";
import Titulo from "../components/Titulo";
import FormLogin from "./FormLogin";


import "./Login.css";

function Login() {
    return (
        <main className="login-container">
            <Titulo texto="Login" />
            <FormLogin />
            <Link url="/esqueci" texto="Esqueceu a senha?" />
            <Link url="/cadastro" texto="Criar uma conta?" />
        </main>
    )
}

export default Login;