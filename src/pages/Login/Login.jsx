import { Link } from "react-router-dom";
import { FormInput, Title } from "../../components";
import { Container, Inputs, RegisterLink } from "./Styles";

export default function Login() {
  return (
    <Container>
      <Title text="LOGIN" />
      <Inputs>
        <FormInput name="email" type="email" placeHolder="E-mail" />
        <FormInput name="password" type="password" placeHolder="Senha" />
      </Inputs>
      <RegisterLink>
        Não possui uma conta? Faça seu cadastro{" "}
        {<Link to="/cadastro">aqui</Link>}
      </RegisterLink>
    </Container>
  );
}
