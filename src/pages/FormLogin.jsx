import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Botao from "../components/Botao";
function FormLogin() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}} = useForm();
    
    const onSubmit = () => {
        navigate("/home");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input tipo="email" texto="E-mail" register={register} error={errors.email} />
            <Input tipo="password" tecto="Senha" register={register} error={errors.senha} />
            <Botao texto="Entrar" />
        </form>
    )
}

export default FormLogin;