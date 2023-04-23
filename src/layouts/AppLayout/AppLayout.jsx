import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../components";
import { Container } from "./Styles";

import { getToken } from "../../services/auth";

export default function AppLayout() {
  // const token = getToken();
  return <Navigate to="login" />;
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
  // return !false ? (
  //   <Navigate to="login" />
  // ) : (
  //   <Container>
  //     <Header />
  //     <Outlet />
  //   </Container>
  // );
}
