import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, EditInput, EditTextArea, Title } from "../../components";
import { getUser, setUser } from "../../services/auth";
import api from "../../services/api";
import { Form, UserInfo } from "./Styles";

export default function Edit() {
  const user = getUser();

  const roleOptions = ["Consultor", "Gerente", "Dev"];
  const loginSchemaValidation = z.object({
    name: z.string().nonempty("Favor digitar um nome").trim(),
    role: z.enum(roleOptions),
    status: z.string().optional(),
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
      const res = await api.put(`/users/${user?._id}`, data);
      const updatedUser = res.data;

      setUser(updatedUser);
      alert("Dados do usuário atualizadas com sucesso!");
    } catch (error) {
      console.error(error);
      alert(
        "Erro ao atualizar os dados do usuário. Tente novamente mais tarde"
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title text="EDITAR" marginBottom="57px" responsiveMarginBottom="50px" />
      <UserInfo>
        <EditInput
          name="name"
          label="Nome:"
          type="text"
          defaultValue={user?.name}
          errors={errors}
          register={register}
        />
        <EditInput
          name="role"
          label="Cargo:"
          type="text"
          defaultValue={user?.role}
          errors={errors}
          register={register}
        />
        <EditTextArea
          name="status"
          label="Status:"
          type="text"
          defaultValue={user?.status}
          errors={errors}
          register={register}
        />
      </UserInfo>
      <Button text="Salvar" />
    </Form>
  );
}
