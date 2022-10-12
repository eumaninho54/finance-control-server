import { CreateUserController } from '../modules/users/createUser';
import { Router } from "express";
import { VerifyTokenController } from '../modules/auth/verifyToken';

const createUserController = new CreateUserController()
const verifyTokenController = new VerifyTokenController()

export const userRoutes = Router()

userRoutes.post("/new", verifyTokenController.handle, createUserController.handle)