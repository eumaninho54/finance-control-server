import { Router } from "express";
import { transactionRoutes } from "./transactionRoutes";
import { authRoutes } from "./authRoutes"
import { userRoutes } from "./userRoutes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/transaction", transactionRoutes)
routes.use("/auth", authRoutes)

export { routes }
