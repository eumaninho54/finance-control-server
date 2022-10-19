import { Request, Response } from "express";
import { GetAdminDTO } from "../../dtos/getAdminDTO";
import { GetAdminUseCase } from "./getAdminUseCase";

export class GetAdminController {
  constructor(
    private getAdminUseCase: GetAdminUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const token = req.params.token;

    const result = await this.getAdminUseCase.execute({ token }) 

    return res.status(201).json(result);
  }
}
