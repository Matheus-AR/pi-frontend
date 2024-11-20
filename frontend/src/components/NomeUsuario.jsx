import "./NomeUsuario.css";

function NomeUsuario(props){
    return (
        <span className="nome-usuario">{props.texto}</span>
    );
}

export default NomeUsuario;