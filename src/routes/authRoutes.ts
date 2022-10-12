import { GetAdminController } from '../modules/auth/useCases/getAdmin/getAdminController';
import { LoginAdminController } from '../modules/auth/useCases/loginAdmin/loginAdminController';
import { Router } from "express";
import { VerifyTokenController } from '../modules/auth/useCases/verifyToken/verifyTokenController';

const loginAdminController = new LoginAdminController()
const verifyTokenController = new VerifyTokenController()
const getAdminController = new GetAdminController()

export const authRoutes = Router()

authRoutes.get("/", verifyTokenController.handle, getAdminController.handle)

authRoutes.post("/login", loginAdminController.handle)