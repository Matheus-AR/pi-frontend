import { useForm } from "react-hook-form";

import Botao from "../components/Botao";
import InputNome from "../components/InputNome";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormCadastro(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.dados });
  return (
    <form onSubmit={handleSubmit(props.enviar)}>
      <InputNome texto="Nome" register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <Botao tipo="submit" texto="Criar" />
    </form>
  );
}

export default FormCadastro;
