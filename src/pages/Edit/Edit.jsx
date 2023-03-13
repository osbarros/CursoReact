import { EditInput, Title } from "../../components";
import { Container, UserInfo, Button, ButtonsContainer } from "./Styles";

export default function Edit() {
  return (
    <Container>
      <Title text="EDITAR" />
      <UserInfo>
        <EditInput name="name" label="Nome" />
        <EditInput name="role" label="Cargo" />
        <EditInput name="status" label="Status" />
      </UserInfo>
      <ButtonsContainer>
        <Button>Cancelar</Button>
        <Button>Salvar</Button>
      </ButtonsContainer>
    </Container>
  );
}
