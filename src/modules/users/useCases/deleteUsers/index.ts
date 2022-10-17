import { DeleteUsersController } from "./deleteUsersController"
import { DeleteUsersUseCase } from "./deleteUsersUseCase"

const deleteUsersUseCase = new DeleteUsersUseCase()

const deleteUsersController = new DeleteUsersController(deleteUsersUseCase)

export { deleteUsersController }