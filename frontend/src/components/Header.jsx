import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "./Menu";
import NomeUsuario from "./NomeUsuario";
import { AuthContext } from "../contexts/AuthContext";
import BotaoSair from "./BotaoSair";
import "./Header.css";

function Header() {
    const {usuario, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSair = async () => {
        await logout();
        navigate("/");
    }
    return (
        <header>
            <NomeUsuario texto={usuario.nome} />
            <Menu />
            <BotaoSair onSair={onSair} />
        </header>
    )
}

export default Header;