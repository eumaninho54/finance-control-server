import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createTransactionController } from "../modules/transactions/useCases/createTransaction";

export const transactionRoutes = Router()

transactionRoutes.post("/new", verifyTokenController.handle, createTransactionController.handle)