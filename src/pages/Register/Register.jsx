import { Button, FormInput, Title } from "../../components";
import { Container, Inputs } from "./Styles";

export default function Register() {
  return (
    <Container>
      <Title
        text="CADASTRO"
        marginBottom="52px"
        responsiveMarginBottom="50px"
      />
      <Inputs>
        <FormInput name="email" type="email" placeHolder="E-mail" />
        <FormInput name="password" type="password" placeHolder="Senha" />
        <FormInput
          name="confirmPassword"
          type="password"
          placeHolder="Confirmar senha"
        />
        <FormInput name="name" type="text" placeHolder="Nome" />
        <FormInput name="role" type="text" placeHolder="Cargo" />
        <FormInput name="status" type="text" placeHolder="Status" />
      </Inputs>
      <Button text="Registrar" />
    </Container>
  );
}
