import "./BotaoSair.css";

function BotaoSair(props) {
    return (
        <button className="botao-sair" type="button" onClick={props.onSair}>Sair</button>
    );
}

export default BotaoSair;