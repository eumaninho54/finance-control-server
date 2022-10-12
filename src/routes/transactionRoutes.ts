import { CreateTransactionController } from '../modules/transactions/createTransaction'
import { Router } from "express";
import { VerifyTokenController } from '../modules/auth/verifyToken';

const createTransactionController = new CreateTransactionController()
const verifyTokenController = new VerifyTokenController()

export const transactionRoutes = Router()

transactionRoutes.post("/new", verifyTokenController.handle, createTransactionController.handle)