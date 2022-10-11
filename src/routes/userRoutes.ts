import { CreateUserController } from './../modules/users/useCases/createUser/createUserController';
import { Router } from "express";

const createUserController = new CreateUserController()

export const userRoutes = Router()

userRoutes.post("/", createUserController.handle)