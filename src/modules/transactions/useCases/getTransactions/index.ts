import { GetTransactionsController } from "./getTransactionsController"
import { GetTransactionsUseCase } from "./getTransactionsUseCase"

const getTransactionsUseCase = new GetTransactionsUseCase()

const getTransactionsController = new GetTransactionsController(getTransactionsUseCase)

export { getTransactionsController }