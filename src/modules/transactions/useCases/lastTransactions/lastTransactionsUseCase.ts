import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../config/prismaClient";
import { LastTransactionsDTO } from "../../dtos/LastTransactionsDTO";

export class LastTransactionsUseCase {
  async execute({ textFilter }: LastTransactionsDTO) {
    // Search Filter by username or reason
    const findTransactions = await prisma.transaction.findMany({
      where: {
        OR: [
          {
            user: {
              name: {contains: textFilter, mode: 'insensitive'}
            }
          },
          {
            reason: { contains: textFilter, mode: 'insensitive'}
          }
        ]
      },
      orderBy: { release_date: 'desc' },
      take: 5
    })
   
    return await Promise.all(findTransactions.map(async (transaction) => {
      const user = await prisma.user.findFirst({
        where: {id: transaction.userId}
      })
  
      return {
        id: transaction.id,
        name: user.name,
        reason: transaction.reason,
        release_date: transaction.release_date,
        value: Number(transaction.value)
      }
    }))
  }
}
