import { Router } from "express";
import { VerifyTokenController } from '../modules/auth/useCases/verifyToken/verifyTokenController';
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/createTransactionController";

const createTransactionController = new CreateTransactionController()
const verifyTokenController = new VerifyTokenController()

export const transactionRoutes = Router()

transactionRoutes.post("/new", verifyTokenController.handle, createTransactionController.handle)