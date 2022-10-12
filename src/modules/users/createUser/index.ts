import { Request, Response } from "express";
import { prisma } from "../../../config/prismaClient";
import { CreateUserInterface } from "../dtos/createUserInterface";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, input_value, output_value }: CreateUserInterface = req.body

    //Create new user
    const user = await prisma.user.create({
      data: {
        name: name,
        transactions: {
          create: [
            {
              input_value: input_value,
              output_value: output_value
            },
          ],
        }
      }
    })

    return res.status(201).json(user)
  }
}
