import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createUserController } from "../modules/users/useCases/createUser";
import { deleteUsersController } from "../modules/users/useCases/deleteUsers";
import { getUsersController } from "../modules/users/useCases/getUsers";

export const userRoutes = Router()

userRoutes.get("/", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => getUsersController.handle(res, req))

userRoutes.post("/new", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => createUserController.handle(res, req))

userRoutes.post("/delete",
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => deleteUsersController.handle(res, req))
