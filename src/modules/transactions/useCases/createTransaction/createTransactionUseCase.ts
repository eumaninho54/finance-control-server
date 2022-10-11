import { prisma } from "../../../../config/prismaClient";
import { ICreateTransaction } from "../../dtos/createTransactionInterface"
import { Transaction } from "@prisma/client"
import { AppError } from "../../../../errors/appError";

export class CreateTransactionUseCase {
  async execute({ id, input_value, output_value }: ICreateTransaction): Promise<Transaction> {
    
    //Verify if exist user with param id
    const userExists = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if(!userExists){
      throw new AppError("User does not exist!")
    }
  
    //Create new transaction of user
    const transaction = await prisma.transaction.create({
      data: {
        input_value: input_value,
        output_value: output_value,
        user: {
          connect: {
            id: 5
          }
        }
      }
    })
    

    return transaction
  }
}