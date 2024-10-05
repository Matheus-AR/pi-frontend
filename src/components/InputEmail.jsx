import "./Input.css";

function InputEmail(props) {
    const regras = {
        required: "E-mail é obrigatório",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Formato inválido de e-mail",
        },
      };
    return (
        <>
            <input type="email" placeholder="E-mail" {...props.register("email", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    )
}

export default InputEmail;