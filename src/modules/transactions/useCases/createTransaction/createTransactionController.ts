import { Request, Response } from "express";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { CreateTransactionUseCase } from "./createTransactionUseCase";

export class CreateTransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, value, reason }: CreateTransactionDTO = req.body;

    const result = await this.createTransactionUseCase.execute({ id, value, reason }) 

    return res.status(201).json(result);
  }
}
