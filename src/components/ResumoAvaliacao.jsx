import "./ResumoAvaliacao.css";

function ResumoAvaliacao(props) {
    return (
        <>
            <div className="item-avaliacao">
                <img src="" alt="Imagem da Avaliação" />
                <div className="descricao">
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </>
    )
}

export default ResumoAvaliacao;