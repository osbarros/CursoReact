import {
  Container,
  Logo,
  IconButtonsContainer,
  IconButton,
  Divider,
} from "./Styles";
import { BsPencilSquare } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo src={logo} alt="CPE logo" />
      <IconButtonsContainer>
        <IconButton>
          <BsPencilSquare />
        </IconButton>
        <Divider />
        <IconButton>
          <IoExitOutline />
        </IconButton>
      </IconButtonsContainer>
    </Container>
  );
}
