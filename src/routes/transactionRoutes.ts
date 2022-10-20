import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createTransactionController } from "../modules/transactions/useCases/createTransaction";
import { getTransactionsController } from "../modules/transactions/useCases/getTransactions";
import { lastInputOutputController } from "../modules/transactions/useCases/lastInputOutput";

export const transactionRoutes = Router()

transactionRoutes.get("/last",
(res, req, next) => verifyTokenController.handle(res, req, next), 
(res, req, next) => lastInputOutputController.handle(res, req))

transactionRoutes.post("/",
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => getTransactionsController.handle(res, req))
  
transactionRoutes.post("/new", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => createTransactionController.handle(res, req))

