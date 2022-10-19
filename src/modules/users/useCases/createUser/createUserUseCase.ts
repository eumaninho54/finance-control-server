import { prisma } from "../../../../config/prismaClient";
import { AppError } from "../../../../errors/appError";
import { CreateUserDTO } from "../../dtos/createUserDTO";

export class CreateUserUseCase {
  async execute({ name, initialValue }: CreateUserDTO) {
    
    //Create new user and initial transaction
    await prisma.user.create({
      data: {
        name: name,
        transactions: { 
          create: { 
            reason: "Inicial", 
            release_date: new Date(), 
            value: initialValue
          }
        }
      }
    })

    const users = await Promise.all((await prisma.user.findMany()).map(async (user) => {
      const transactions = await prisma.transaction.findMany({where: {userId: user.id}})
      let input_value = 0;
      let output_value = 0;

      //Find input value total and output value total in transactions
      transactions.filter((t) => Number(t.value) >= 0 
        ? input_value  += Number(t.value) 
        : output_value += Number(t.value)) 

      return {
        id: user.id,
        name: user.name,
        input_value: input_value,
        output_value: output_value,
        last_value: transactions[0] ? transactions[transactions.length - 1].value : 0,
        last_reason: transactions[0] ? transactions[transactions.length - 1].reason : "Sem transação",
        total_money: input_value + output_value,
        transactions: transactions
      }
    }))

    return users
  }
}
