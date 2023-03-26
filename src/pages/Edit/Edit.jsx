import { Button, EditInput, Title } from "../../components";
import { Container, UserInfo, ButtonsContainer } from "./Styles";

export default function Edit() {
  return (
    <Container>
      <Title text="EDITAR" marginBottom="57px" responsiveMarginBottom="50px" />
      <UserInfo>
        <EditInput name="name" label="Nome:" type="text" />
        <EditInput name="role" label="Cargo:" type="text" />
        <EditInput name="status" label="Status:" type="text" textAreaMode />
      </UserInfo>
      <ButtonsContainer>
        <Button text="Cancelar" />
        <Button text="Salvar" />
      </ButtonsContainer>
    </Container>
  );
}
