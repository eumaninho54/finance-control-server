import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createUserController } from "../modules/users/useCases/createUser";

export const userRoutes = Router()

userRoutes.post("/new", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => createUserController.handle(res, req))