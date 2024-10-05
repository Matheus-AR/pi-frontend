function InputConfirmaSenha(props) {
    const regras = {
        validate: value => value == props.senha || 'As senhas não coincidem'
    };
    return (
        <>
            <input type="password" placeholder="Confirme a senha" {...props.register("confirmasenha", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    )
}

export default InputConfirmaSenha;