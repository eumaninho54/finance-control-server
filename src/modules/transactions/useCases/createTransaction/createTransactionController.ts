import { Request, Response } from "express";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { CreateTransactionUseCase } from "./createTransactionUseCase";

export class CreateTransactionController {
  async handle(req: Request, res: Response) {
    const { id, input_value, output_value }: CreateTransactionDTO = req.body;

    const createTransactionUseCase = new CreateTransactionUseCase()

    const result = await createTransactionUseCase.execute({ id, input_value, output_value }) 

    return res.status(201).json(result);
  }
}
