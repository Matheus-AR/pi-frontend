import "./ResumoAvaliacao.css";

function ResumoAvaliacao(props) {
    return (
        <>
            <div className="item-avaliacao" onClick={() => props.navega(props.id)}>
                <div className="descricao">
                    <h2>{props.nome}</h2>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </>
    )
}

export default ResumoAvaliacao;