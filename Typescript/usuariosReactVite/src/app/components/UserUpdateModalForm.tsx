import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { User } from "../types/User";
import { UpdateUser } from "./helpers/UserServices";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const userInitial: User = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

type UserUpdateModalFormProps = {
  activeModal: boolean;
  toogleModal: (newToogleModal: boolean) => void;
  userFormData: User;
  tableUpdate: () => Promise<void>;
};

export const UserUpdateModalForm = ({
  activeModal, //Paso de dato padre - hijo
  toogleModal, //Cambia valor en campo de padre desde hijo
  userFormData, //Paso de dato padre - hijo
  tableUpdate, //Usa funcion del padre en hijo
}: UserUpdateModalFormProps) => {
  const [userForm, setUserForm] = useState(userInitial);
  useEffect(() => {
    setUserForm(userFormData);
  }, [userFormData]);

  const handleEdit = async (user: User) => {
    await UpdateUser(user);
    await tableUpdate();
  };

  return (
    <>
      <div>
        <Modal
          open={activeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Editar usuario <strong>"{userForm.name}"</strong>
            </Typography>
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
            <Button
              className="btn btn-warning"
              onClick={() => {
                handleEdit(userForm);
                toogleModal(false);
              }}
            >
              Actualizar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => toogleModal(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
