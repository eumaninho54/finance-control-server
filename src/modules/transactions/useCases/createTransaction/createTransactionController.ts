import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./createTransactionUseCase";

export class CreateTransactionController {
  async handle(req: Request, res: Response) {
    const { id, input_value, output_value } = req.body

    const createTransactionUseCase = new CreateTransactionUseCase()

    const result = await createTransactionUseCase.execute({id, input_value, output_value})

    return res.status(201).json(result)
  }
}
