import { Request, Response } from "express";
import { DeleteUserDTO } from "../../dtos/deleteUserDTO";
import { DeleteUsersUseCase } from "./deleteUsersUseCase";

export class DeleteUsersController {
  constructor(
    private deleteUsersUseCase: DeleteUsersUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id }: DeleteUserDTO = req.body;

    const result = await this.deleteUsersUseCase.execute({id}) 

    return res.status(201).json(result);
  }
}
