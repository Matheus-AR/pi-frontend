import "./Link.css";
import { NavLink } from "react-router-dom";
function Link(props) {
    return (
        <NavLink to={props.url}>{props.texto}</NavLink>
    )
}

export default Link;