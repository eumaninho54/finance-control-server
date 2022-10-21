import { Request, Response } from "express";
import { LastTransactionsDTO } from "../../dtos/LastTransactionsDTO";
import { LastTransactionsUseCase } from "./lastTransactionsUseCase";

export class LastTransactionsController {
  constructor(
    private lastTransactionsUseCase: LastTransactionsUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { textFilter }: LastTransactionsDTO = req.body;

    const result = await this.lastTransactionsUseCase.execute({textFilter: textFilter}) 

    return res.status(201).json(result);
  }
}
