import { Request, Response } from "express";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { CreateUserUseCase } from "./createTransactionUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, input_value, output_value }: CreateUserDTO = req.body;

    const createTransactionUseCase = new CreateUserUseCase()

    const result = await createTransactionUseCase.execute({ name, input_value, output_value }) 

    return res.status(201).json(result);
  }
}
