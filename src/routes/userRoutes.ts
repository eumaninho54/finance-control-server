import { Router } from "express";
import { VerifyTokenController } from "../modules/auth/useCases/verifyToken/verifyTokenController";
import { CreateUserController } from "../modules/users/useCases/createUser/createTransactionController";

const createUserController = new CreateUserController()
const verifyTokenController = new VerifyTokenController()

export const userRoutes = Router()

userRoutes.post("/new", verifyTokenController.handle, createUserController.handle)