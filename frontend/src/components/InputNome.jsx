import "./Input.css";

function InputNome(props) {
    const regras = {
        required: "Nome é obrigatório",
      };
    return (
        <>
            <input type="text" placeholder={props.texto} {...props.register("nome", regras)} />
            {props.error && <p className="error">{props.error.message}</p>}
        </>
    )
}

export default InputNome;