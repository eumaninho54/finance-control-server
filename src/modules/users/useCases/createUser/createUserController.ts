import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, input_value, output_value } = req.body

    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({name, input_value, output_value})

    return res.status(201).json(result)

  }
}
