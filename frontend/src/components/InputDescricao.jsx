function InputDescricao(props) {
    const regras = {
        required: "A descrição é obrigatória"
    }
    return (
        <>
            <input type="text" placeholder={props.texto} {...props.register("descricao", regras)} />
            {props.error && <p className="error">{props.error.message}</p>}
        </>
    )
}

export default InputDescricao;