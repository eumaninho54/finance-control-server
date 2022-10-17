import { Request, Response } from "express";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, initialValue }: CreateUserDTO = req.body;

    const result = await this.createUserUseCase.execute({ name, initialValue }) 

    return res.status(201).json(result);
  }
}
