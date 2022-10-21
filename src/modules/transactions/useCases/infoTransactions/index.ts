import { InfoTransactionsController } from "./infoTransactionsController"
import { InfoTransactionsUseCase } from "./infoTransactionsUseCase"

const infoTransactionsUseCase = new InfoTransactionsUseCase()

const infoTransactionsController = new InfoTransactionsController(infoTransactionsUseCase)

export { infoTransactionsController }