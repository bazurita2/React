import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { UserTable } from "./components/UserTable";
import { UserCreateForm } from "./components/UserCreateForm";
import { CustomCounter } from "./components/CustomCounter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTable />,
  },
  {
    path: "create",
    element: <UserCreateForm />,
  },
  {
    path: "counter",
    element: <CustomCounter />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
