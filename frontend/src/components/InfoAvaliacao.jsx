import "./InfoAvaliacao.css";

function InfoAvaliacao(props) {
  return (
    <div className="container-infos">
      <p className="nome-produto">Nome: {props.nome}</p>
      <p className="autor-produto">Autor: {props.autor}</p>
      <p className="descricao-produto">Descricao: {props.descricao}</p>
    </div>
  );
}

export default InfoAvaliacao;
