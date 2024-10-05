function InputSenha(props) {
  const regras = {
    required: "Senha é obrigatório",
    miLength: {
      value: 8,
      message: "A senha deve pelo menos 8 caracteres",
    },
  };
  return (
    <>
      <input type="password" placeholder="Senha" {...props.register("senha", regras)} />
      {props.error && <p className="error">{props.error.message}</p>}
    </>
  );
}

export default InputSenha;