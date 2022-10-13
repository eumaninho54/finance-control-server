import { GetAdminController } from "./getAdminController"
import { GetAdminUseCase } from "./getAdminUseCase"

const getAdminUseCase = new GetAdminUseCase()

const getAdminController = new GetAdminController(getAdminUseCase)

export { getAdminController }