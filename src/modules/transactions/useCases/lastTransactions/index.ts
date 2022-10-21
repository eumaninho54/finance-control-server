import { LastTransactionsController } from "./lastTransactionsController"
import { LastTransactionsUseCase } from "./lastTransactionsUseCase"

const lastTransactionsUseCase = new LastTransactionsUseCase()

const lastTransactionsController = new LastTransactionsController(lastTransactionsUseCase)

export { lastTransactionsController }