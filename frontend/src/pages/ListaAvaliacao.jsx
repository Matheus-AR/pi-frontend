import ResumoAvaliacao from "../components/ResumoAvaliacao";
import "./ListaAvaliacao.css";

function ListaAvaliacao() {
    const resumos = [
        {titulo: "Avaliação 1", descricao: "Descricao 1"},
        {titulo: "Avaliação 2", descricao: "Descrição 2"},
        {titulo: "Avaliação 3", descricao: "Descrição 3"}
    ]
    return (
        <>
            <ul className="lista-avaliacoes">
                {resumos.map((item, index) => (
                    <li key={index}>
                        <ResumoAvaliacao titulo={item.titulo} descricao={item.descricao} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaAvaliacao;