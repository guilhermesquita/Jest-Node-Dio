import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const routes = Router();
const usersController = new UsersController()

routes.get('/', usersController.listarUsuario)

routes.post('/', usersController.criarUsuario)

export {routes};
