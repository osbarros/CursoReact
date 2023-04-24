import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button, FormInput, FormSelect, Title } from "../../components";
import { Form, Inputs } from "./Styles";
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const roleOptions = ["Consultor", "Gerente", "Dev"];
  const registerSchemaValidation = z
    .object({
      name: z.string().nonempty("Favor digitar um nome").trim(),
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
      confirmPassword: z.string().nonempty("Confirme sua senha"),
      role: z.enum(roleOptions),
      status: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Senhas não coincidem",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchemaValidation),
  });
  const onSubmit = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar o registo. Tente novamente mais tarde");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title
        text="CADASTRO"
        marginBottom="52px"
        responsiveMarginBottom="50px"
      />
      <Inputs>
        <FormInput
          name="email"
          type="email"
          placeHolder="E-mail*"
          errors={errors}
          register={register}
        />
        <FormInput
          name="password"
          type="password"
          placeHolder="Senha*"
          errors={errors}
          register={register}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeHolder="Confirmar senha*"
          errors={errors}
          register={register}
        />
        <FormInput
          name="name"
          type="text"
          placeHolder="Nome*"
          errors={errors}
          register={register}
        />
        <FormSelect
          name="role"
          type="text"
          placeHolder="Cargo*"
          errors={errors}
          register={register}
          data={roleOptions}
        />
        <FormInput
          name="status"
          type="text"
          placeHolder="Status"
          errors={errors}
          register={register}
        />
      </Inputs>
      <Button text="Registrar" />
    </Form>
  );
}
