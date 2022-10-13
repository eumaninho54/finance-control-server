import { NextFunction, Request, Response } from "express";
import { VerifyTokenDTO } from "../../dtos/verifyTokenDTO";
import { VerifyTokenUseCase } from "./verifyTokenUseCase";

export class VerifyTokenController {
  constructor(
    private verifyTokenUseCase: VerifyTokenUseCase
  ){}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { token }: VerifyTokenDTO = req.body;

    const tokenValided = await this.verifyTokenUseCase.execute({ token }) 

    req.params.token = tokenValided
    next()
  }
}
