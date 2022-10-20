import { Request, Response } from "express";
import { GetTransactionsDTO } from "../../dtos/getTransactionsDTO";
import { GetTransactionsUseCase } from "./getTransactionsUseCase";

export class GetTransactionsController {
  constructor(
    private getTransactionsUseCase: GetTransactionsUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { textFilter }: GetTransactionsDTO = req.body;

    const result = await this.getTransactionsUseCase.execute({textFilter: textFilter}) 

    return res.status(201).json(result);
  }
}
