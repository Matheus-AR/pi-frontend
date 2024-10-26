import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Titulo2 from "../components/Titulo2";
import InputNome from "../components/InputNome";
import Botao from "../components/Botao";
import InputDescricao from "../components/InputDescricao";

function FormCriarAvaliacao() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        navigate("/perfil");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Titulo2 texto="Criar Avaliação" />
            <InputNome texto="Nome do produto" register={register} error={errors.nome} />
            <InputDescricao texto="Descreva o produto" register={register} error={errors.descricao} />
            <Botao tipo="submit" texto="Criar" />
        </form>
    )
}

export default FormCriarAvaliacao;