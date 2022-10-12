import { GetAdminController } from './../modules/auth/getAdmin/index';
import { LoginController } from './../modules/auth/login';
import { Router } from "express";
import { VerifyTokenController } from '../modules/auth/verifyToken';

const loginController = new LoginController()
const verifyTokenController = new VerifyTokenController()
const getAdminController = new GetAdminController()

export const authRoutes = Router()

authRoutes.get("/", verifyTokenController.handle, getAdminController.handle)

authRoutes.post("/login", loginController.handle)