import { NavLink } from "react-router-dom";

import "./Menu.css";

function Menu() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/avaliacao">Avaliação</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;