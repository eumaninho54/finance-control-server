import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createUserController } from "../modules/users/useCases/createUser";

export const userRoutes = Router()

userRoutes.post("/new", verifyTokenController.handle, createUserController.handle)