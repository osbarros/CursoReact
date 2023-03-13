import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { Home, Login, Register, NotFound, Edit } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="edicao" element={<Edit />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
