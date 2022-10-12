import { prisma } from "../../../../config/prismaClient";
import { AppError } from "../../../../errors/appError";
import { CreateUserDTO } from "../../dtos/createUserDTO";

export class CreateUserUseCase {
  async execute({ name, input_value, output_value }: CreateUserDTO) {
    
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
