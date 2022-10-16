import { Request, Response } from "express";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { GetUsersUseCase } from "./getUsersUseCase";

export class GetUsersController {
  constructor(
    private getUsersUseCase: GetUsersUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.getUsersUseCase.execute() 

    return res.status(201).json(result);
  }
}
