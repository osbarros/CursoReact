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
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="CPE logo" />
      </Link>
      <IconButtonsContainer>
        <IconButton onClick={() => navigate("edicao")}>
          <BsPencilSquare />
        </IconButton>
        <Divider />
        <IconButton onClick={() => console.log("Logout")}>
          <IoExitOutline />
        </IconButton>
      </IconButtonsContainer>
    </Container>
  );
}
