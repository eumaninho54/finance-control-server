import { NextFunction, Request, Response } from "express";
import { VerifyTokenUseCase } from "./verifyTokenUseCase";

export class VerifyTokenController {
  constructor(
    private verifyTokenUseCase: VerifyTokenUseCase
  ){}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.header("x-access-token");

    const tokenValided = await this.verifyTokenUseCase.execute({ token }) 

    req.params.token = tokenValided
    next()
  }
}
