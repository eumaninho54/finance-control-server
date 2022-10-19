import { LastInputOutputController } from "./lastInputOutputController"
import { LastInputOutputUseCase } from "./lastInputOutputUseCase"

const lastInputOutputUseCase = new LastInputOutputUseCase()

const lastInputOutputController = new LastInputOutputController(lastInputOutputUseCase)

export { lastInputOutputController }