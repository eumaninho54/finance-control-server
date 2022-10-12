import { NextFunction, Request, Response } from "express";
import { VerifyTokenDTO } from "../../dtos/verifyTokenDTO";
import { VerifyTokenUseCase } from "./verifyTokenUseCase";

export class VerifyTokenController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { token }: VerifyTokenDTO = req.body;

    const verifyTokenUseCase = new VerifyTokenUseCase()

    const tokenValided = await verifyTokenUseCase.execute({ token }) 

    req.params.token = tokenValided
    next()
  }
}
