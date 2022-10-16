import { GetUsersController } from "./getUsersController"
import { GetUsersUseCase } from "./getUsersUseCase"

const getUsersUseCase = new GetUsersUseCase()

const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController }