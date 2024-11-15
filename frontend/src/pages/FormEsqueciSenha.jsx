import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import Botao from "../components/Botao";

function FormEsqueciSenha() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        alert("E-mail enviado! Olhe sua caixa de mensagens!");
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputEmail register={register} error={errors.email} />
            <Botao tipo="submit" texto="Enviar" />
        </form>
    )
}

export default FormEsqueciSenha;