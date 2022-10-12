import { Router } from "express";
import { LoginController } from "../modules/auth/login";
import { transactionRoutes } from "./transactionRoutes";
import { userRoutes } from "./userRoutes";

const loginController = new LoginController()
const routes = Router()

routes.use("/users", userRoutes)
routes.use("/transaction", transactionRoutes)
routes.use("/login", loginController.handle)

export { routes }
