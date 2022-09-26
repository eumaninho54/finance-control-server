import { Request, Response, Router } from 'express'
import { check } from 'express-validator'

const routes = Router()

routes.get('/', (request: Request, response: Response) => response.json('teste'))

export default routes