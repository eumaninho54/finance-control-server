import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import { LoginAdminDTO } from "../../dtos/loginAdminDTO";
import { LoginAdminUseCase } from "./loginAdminUseCase";

export class LoginAdminController {
  async handle(req: Request, res: Response) {
    const { username, password }: LoginAdminDTO = req.body;

    const loginAdminUseCase = new LoginAdminUseCase()

    const result = await loginAdminUseCase.execute({ username, password }) 

    return res.status(201).json(result);
  }
}
