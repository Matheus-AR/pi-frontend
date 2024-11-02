import ResumoAvaliacao from "../components/ResumoAvaliacao";
import "./ListaAvaliacao.css";

function ListaAvaliacao(props) {
    
    return (
        <>
            <ul className="lista-avaliacoes">
                {props.itens.map((item, index) => (
                    <li key={index}>
                        <ResumoAvaliacao nome={item.nome} descricao={item.descricao} navega={props.navega} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaAvaliacao;