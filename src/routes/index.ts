import { Router } from "express";
import { transactionRoutes } from "./transactionRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/transaction", transactionRoutes)

export { routes }