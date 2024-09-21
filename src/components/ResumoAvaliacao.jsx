import "./ResumoAvaliacao.css";

function ResumoAvaliacao(props) {
    return (
        <>
            <div className="item-avaliacao">
                <img src="" alt="" />
                <div className="descricao">
                    <h2>{props.titulo}</h2>
                    <p>{props.decricao}</p>
                </div>
            </div>
        </>
    )
}

export default ResumoAvaliacao;