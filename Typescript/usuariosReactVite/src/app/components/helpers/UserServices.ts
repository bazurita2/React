import axios from "axios";
import { User } from "../../types/User";

const url = "http://localhost:8080/usuarioWs/";
const urlGetUsers = url + "usuarios";
const urlCreateUser = url + "usuario/crear/";
const urlUpdateUser = url + "usuario/actualizar/";
const urlDeleteUser = url + "usuario/borrar/";

const GetUsers = async () => {
  try {
    const response = await axios.get(urlGetUsers);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const CreateUser = async (user: User) => {
  try {
    await axios.post(urlCreateUser, user);
  } catch (error) {
    console.error(error);
  }
};

const UpdateUser = async (user: User) => {
  try {
    await axios.put(urlUpdateUser + user.id, user);
  } catch (error) {
    console.error(error);
  }
};

const DeleteUser = async (id: string) => {
  try {
    await axios.delete(urlDeleteUser + id);
  } catch (error) {
    console.error(error);
  }
};

export { GetUsers, CreateUser, UpdateUser, DeleteUser };
