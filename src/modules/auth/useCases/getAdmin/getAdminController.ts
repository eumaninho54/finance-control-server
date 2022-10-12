import { Request, Response } from "express";
import { GetAdminDTO } from "../../dtos/getAdminDTO";
import { GetAdminUseCase } from "./getAdminUseCase";

export class GetAdminController {
  async handle(req: Request, res: Response) {
    const { token }: GetAdminDTO = req.body;

    const getAdminUseCase = new GetAdminUseCase()

    const result = await getAdminUseCase.execute({ token }) 

    return res.status(201).json(result);
  }
}
