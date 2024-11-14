import { useForm } from "react-hook-form";

import Botao from "../components/Botao";
import InputSenha from "../components/InputSenha";
import InputEmail from "../components/InputEmail";

function FormLogin(props) {
    const { register, handleSubmit, formState: {errors}} = useForm();
    
    return (
        <form onSubmit={handleSubmit(props.onEnviar)}>
            <InputEmail texto="E-mail" register={register} error={errors.email} />
            <InputSenha texto="Senha" register={register} error={errors.senha} />
            <Botao tipo="submit" texto="Entrar" />
        </form>
    )
}

export default FormLogin;