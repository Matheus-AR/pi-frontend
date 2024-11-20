import { useContext } from "react";
import "./Header.css";

import Menu from "./Menu";
import NomeUsuario from "./NomeUsuario";
import { AuthContext } from "../contexts/AuthContext";
import BotaoSair from "./BotaoSair";

function Header() {
    const {usuario, logout} = useContext(AuthContext);
    const onSair = async () => {
        await logout();
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