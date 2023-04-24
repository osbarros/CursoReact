import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormInput, Title } from "../../components";
import { Form, Inputs, RegisterLink } from "./Styles";
import api from "../../services/api";
import { login } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();
  const loginSchemaValidation = z.object({
    email: z
      .string()
      .nonempty("Favor digitar o email")
      .email("Insira um email no formato email@email.com")
      .trim(),
    password: z
      .string()
      .nonempty("Favor digitar uma senha")
      .min(6, "A senha não pode ter menos de 6 caracteres")
      .max(16, "A senha não pode ter mais de 16 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchemaValidation),
  });
  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);
      const token = res?.data?.token;

      login(token);

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar o login. Tente novamente mais tarde");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title text="LOGIN" />
      <Inputs>
        <FormInput
          name="email"
          type="email"
          placeHolder="E-mail*"
          register={register}
          errors={errors}
        />
        <FormInput
          name="password"
          type="password"
          placeHolder="Senha*"
          register={register}
          errors={errors}
        />
      </Inputs>
      <RegisterLink>
        Não possui uma conta? Faça seu cadastro{" "}
        {<Link to="/cadastro">aqui</Link>}
      </RegisterLink>
      <Button text="Entrar" />
    </Form>
  );
}
