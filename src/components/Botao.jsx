import "./Botao.css"

function Botao(props) {
    return (
        <input type="submit" value={props.texto} />
    )
} 

export default Botao;