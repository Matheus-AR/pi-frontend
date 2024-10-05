import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import InputSenha from "../components/InputSenha";
import InputEmail from "../components/InputEmail";
function FormLogin() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}} = useForm();
    
    const onSubmit = () => {
        navigate("/home");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputEmail texto="E-mail" register={register} error={errors.email} />
            <InputSenha texto="Senha" register={register} error={errors.senha} />
            <Botao tipo="submit" texto="Entrar" />
        </form>
    )
}

export default FormLogin;