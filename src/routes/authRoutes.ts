import { Router } from "express";
import { getAdminController } from '../modules/auth/useCases/getAdmin';
import { verifyTokenController } from '../modules/auth/useCases/verifyToken';
import { loginAdminController } from '../modules/auth/useCases/loginAdmin';

export const authRoutes = Router()

authRoutes.get("/", verifyTokenController.handle, getAdminController.handle)

authRoutes.post("/login", loginAdminController.handle)