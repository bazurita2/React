import { useNavigate } from "react-router-dom";
import { UserUpdateModalForm } from "./UserUpdateModalForm";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import { DeleteUser, GetUsers } from "./helpers/UserServices";

const userInitial: User = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

export const UserTable = () => {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate("create");
  };
  const navigateToCounter = () => {
    navigate("counter");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(userInitial);
  const [users, setUsers] = useState([userInitial]);

  useEffect(() => {
    tableUpdate();
  }, []);

  const tableUpdate = async () => {
    await GetUsers().then((data) => {
      setUsers(data);
      console.log(data);
    });
  };

  const handleDelete = async (id: string) => {
    await DeleteUser(id);
    await tableUpdate();
  };

  return (
    <>
      <div className="container text-center">
        <h1>Bienvenido a CRUD ReactVite</h1>
        <button className="btn btn-info mx-2" onClick={navigateToCreate}>
          Agregar
        </button>
        <button className="btn btn-info" onClick={navigateToCounter}>
          Contador Custom
        </button>
        <hr />
      </div>
      <div className="card">
        <div className="card-header">
          <h3>Usuarios</h3>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="text-center">
              <tr>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>CORREO</th>
                <th>DIRECCION</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="text-center">
                  <td>{u.name}</td>
                  <td>{u.lastName}</td>
                  <td>{u.email}</td>
                  <td>{u.address}</td>
                  <td>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        setIsModalOpen(true);
                        setUser(u);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(u.id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserUpdateModalForm
        activeModal={isModalOpen}
        toogleModal={(toogleModal) => setIsModalOpen(toogleModal)}
        userFormData={user}
        tableUpdate={tableUpdate}
      />
    </>
  );
};
