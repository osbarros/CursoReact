import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { Home, Login, Register, NotFound, Edit } from "./pages";
import { getToken } from "./services/auth";

function PrivateRoutes() {
  const token = getToken();

  return !token ? <Navigate to="/login" /> : <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="edicao" element={<Edit />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
