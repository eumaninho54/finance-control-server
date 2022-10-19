import { Request, Response } from "express";
import { LastInputOutputUseCase } from "./lastInputOutputUseCase";

export class LastInputOutputController {
  constructor(
    private lastInputOutputUseCase: LastInputOutputUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.lastInputOutputUseCase.execute() 

    return res.status(201).json(result);
  }
}
