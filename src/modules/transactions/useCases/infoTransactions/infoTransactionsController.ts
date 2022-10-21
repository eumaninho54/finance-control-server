import { Request, Response } from "express";
import { InfoTransactionsUseCase } from "./infoTransactionsUseCase";

export class InfoTransactionsController {
  constructor(
    private infoTransactionsUseCase: InfoTransactionsUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.infoTransactionsUseCase.execute() 

    return res.status(201).json(result);
  }
}
