import { useState } from "react";
import { User } from "../types/User";
import { CreateUser } from "./helpers/UserServices";
import { useNavigate } from "react-router-dom";

const userInitial: User = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

export const UserCreateForm = () => {
  const [userForm, setUserForm] = useState(userInitial);
  const navigate = useNavigate();
  const navigateToRoot = () => {
    navigate("/");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreateUser(userForm);
    console.log(userForm);
  };

  return (
    <>
      <div className="container">
        <h3>Crear</h3>
        <h4>Usuario</h4>
        <hr />
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            Nombres:
            <input
              className="form-control"
              type="text"
              name="nombreCreate"
              value={userForm.name}
              onChange={(e) =>
                setUserForm({ ...userForm, name: e.target.value })
              }
            />
            <br />
            Apellido:
            <input
              className="form-control"
              type="text"
              name="apellidoCreate"
              value={userForm.lastName}
              onChange={(e) =>
                setUserForm({ ...userForm, lastName: e.target.value })
              }
            />
            <br />
            Correo:
            <input
              className="form-control"
              type="email"
              name="correoCreate"
              value={userForm.email}
              onChange={(e) =>
                setUserForm({ ...userForm, email: e.target.value })
              }
            />
            <br />
            Contraseña:
            <input
              className="form-control"
              type="text"
              name="contraseniaCreate"
              value={userForm.password}
              onChange={(e) =>
                setUserForm({ ...userForm, password: e.target.value })
              }
            />
            <br />
            Direccion:
            <input
              className="form-control"
              type="text"
              name="direccionCreate"
              value={userForm.address}
              onChange={(e) =>
                setUserForm({ ...userForm, address: e.target.value })
              }
            />
            <br />
            <button className="btn btn-warning" type="submit" value="Guardar">
              Guardar
            </button>
          </form>
          <button className="btn btn-info ml-5 mt-2" onClick={navigateToRoot}>
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
