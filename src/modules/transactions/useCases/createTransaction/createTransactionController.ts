import { Request, Response } from "express";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { CreateTransactionUseCase } from "./createTransactionUseCase";

export class CreateTransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, input_value, output_value }: CreateTransactionDTO = req.body;

    const result = await this.createTransactionUseCase.execute({ id, input_value, output_value }) 

    return res.status(201).json(result);
  }
}
