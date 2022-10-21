import { Router } from "express";
import { verifyTokenController } from "../modules/auth/useCases/verifyToken";
import { createTransactionController } from "../modules/transactions/useCases/createTransaction";
import { infoTransactionsController } from "../modules/transactions/useCases/infoTransactions";
import { lastTransactionsController } from "../modules/transactions/useCases/lastTransactions";

export const transactionRoutes = Router()

transactionRoutes.get("/info",
(res, req, next) => verifyTokenController.handle(res, req, next), 
(res, req, next) => infoTransactionsController.handle(res, req))

transactionRoutes.post("/last",
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => lastTransactionsController.handle(res, req))
  
transactionRoutes.post("/new", 
  (res, req, next) => verifyTokenController.handle(res, req, next), 
  (res, req, next) => createTransactionController.handle(res, req))

