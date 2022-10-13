import { LoginAdminController } from "./loginAdminController"
import { LoginAdminUseCase } from "./loginAdminUseCase"

const loginAdminUseCase = new LoginAdminUseCase()

const loginAdminController = new LoginAdminController(loginAdminUseCase)

export { loginAdminController }