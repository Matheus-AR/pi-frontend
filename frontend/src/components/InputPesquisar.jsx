import "./InputPesquisar.css";

function InputPesquisar(props) {
    return (
        <input type="search" placeholder="Pesquisar..." onChange={(ev) => {props.onChange(ev.target.value);}} />
    )
}

export default InputPesquisar;