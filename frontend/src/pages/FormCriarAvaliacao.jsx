import { useForm } from "react-hook-form";

import Titulo2 from "../components/Titulo2";
import InputNome from "../components/InputNome";
import Botao from "../components/Botao";
import InputDescricao from "../components/InputDescricao";

function FormCriarAvaliacao(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.dados });
  return (
    <form onSubmit={handleSubmit(props.trataEnviar)}>
      <Titulo2 texto="Criar Avaliação" />
      <InputNome
        texto="Nome do produto"
        register={register}
        error={errors.nome}
      />
      <InputDescricao
        texto="Descreva o produto"
        register={register}
        error={errors.descricao}
      />
      <Botao tipo="submit" texto="Criar" />
    </form>
  );
}

export default FormCriarAvaliacao;
