import { CreateUserController } from './../modules/users/useCases/createUser/createUserController';
import { CreateTransactionController } from '../modules/transactions/useCases/createTransaction/createTransactionController';
import { Router } from "express";

const createTransactionController = new CreateTransactionController()

export const transactionRoutes = Router()

transactionRoutes.post("/new", createTransactionController.handle)