import { NavLink } from "react-router-dom";

import "./Menu.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Menu() {
    const {usuario} = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={`/perfil/${usuario.id}`}>Perfil</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;