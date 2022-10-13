import { Router } from "express";
import { getAdminController } from '../modules/auth/useCases/getAdmin';
import { loginAdminController } from "../modules/auth/useCases/loginAdmin";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";

export const authRoutes = Router()

authRoutes.get("/", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => getAdminController.handle(res, req))

authRoutes.post("/login", (res, req) => loginAdminController.handle(res, req))