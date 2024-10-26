import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Botao from "../components/Botao";
import InputNome from "../components/InputNome";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import InputConfirmaSenha from "../components/InputConfirmaSenha";

function FormCadastro() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const campoSenha = watch('senha');
    const onSubmit = (data) => {
        const { senha, confirmasenha} = data;
        if (senha === confirmasenha) {
            navigate("/login");
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputNome texto="Nome" register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <InputConfirmaSenha register={register} error={errors.confirmasenha} senha={campoSenha} />
            <Botao tipo="submit" texto="Criar" />
        </form>
    )
}

export default FormCadastro;