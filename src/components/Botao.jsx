import "./Botao.css"

function Botao(props) {
    return (
        <input type={props.tipo} value={props.texto} onClick={props.onClick} />
    )
} 

export default Botao;