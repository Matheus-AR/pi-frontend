import { NavLink } from "react-router-dom";

import "./Menu.css";

function Menu() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;