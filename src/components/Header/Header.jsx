import { Container, IconButton, IconButtonsContainer, Logo } from "./Styles";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo src={logo} alt="CPE logo" />
      <IconButtonsContainer>
        <IconButton>Editar</IconButton>
        <IconButton>Logout</IconButton>
      </IconButtonsContainer>
    </Container>
  );
}
