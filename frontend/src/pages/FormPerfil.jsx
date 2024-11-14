import { useForm } from "react-hook-form";

import Botao from "../components/Botao";
import InputNome from "../components/InputNome";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Titulo2 from "../components/Titulo2";

function FormPerfil(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.valores });
  return (
    <form onSubmit={handleSubmit(props.onEnviar)}>
      <Titulo2 texto="Editar Perfil" />
      {props.msg && <p className="error">{props.msg}</p>}
      <InputNome texto="Nome" register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <Botao tipo="submit" texto="Salvar" />
    </form>
  );
}

export default FormPerfil;
