import { prisma } from "../../../../config/prismaClient";
import { CreateUserInterface } from "../../dtos/createUserInterface";
import { User } from "@prisma/client"
import { AppError } from "../../../../errors/appError";

export class CreateUserUseCase {
  async execute({ name, input_value, output_value }: CreateUserInterface): Promise<User> {

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
    

    return user
  }
}