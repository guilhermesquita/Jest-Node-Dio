import { response, Router } from "express";
import { usersControllers } from "./controllers/usersController.js";
const routes = Router();

routes.get('/', usersControllers.listarUsuario)

routes.post('/', usersControllers.criarUsuario)

export {routes};
