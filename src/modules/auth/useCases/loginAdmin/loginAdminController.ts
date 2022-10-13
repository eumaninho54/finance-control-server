import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import { LoginAdminDTO } from "../../dtos/loginAdminDTO";
import { LoginAdminUseCase } from "./loginAdminUseCase";

export class LoginAdminController {
  constructor(
    private loginAdminUseCase: LoginAdminUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password }: LoginAdminDTO = req.body;

    const result = await this.loginAdminUseCase.execute({ username, password }) 

    return res.status(201).json(result);
  }
}
