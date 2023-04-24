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
import { getToken, logout } from "../../services/auth";

export default function Header() {
  const token = getToken();
  const navigate = useNavigate();

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="CPE logo" />
      </Link>
      {!!token && (
        <IconButtonsContainer>
          <IconButton onClick={() => navigate("edicao")}>
            <BsPencilSquare />
          </IconButton>
          <Divider />
          <IconButton onClick={logout}>
            <IoExitOutline />
          </IconButton>
        </IconButtonsContainer>
      )}
    </Container>
  );
}
