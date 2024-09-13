import "./Input.css";

function Input(props) {
    return (
        <input type={props.tipo} id={props.id} name={props.id} placeholder={props.texto} />
    )
}

export default Input;