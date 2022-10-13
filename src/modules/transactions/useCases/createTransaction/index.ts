import { CreateTransactionController } from "./createTransactionController"
import { CreateTransactionUseCase } from "./createTransactionUseCase"

const createTransactionUseCase = new CreateTransactionUseCase()

const createTransactionController = new CreateTransactionController(createTransactionUseCase)

export { createTransactionController }