import { Request, Response } from "express";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../config/prismaClient";

export class CreateTransactionUseCase {
  async execute({ id, reason, valueTransaction }: CreateTransactionDTO) {
    
    //Verify if exist user with param id
    const userExists = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist!");
    }

    //Create new transaction of user
    const transaction = await prisma.transaction.create({
      data: {
        value: valueTransaction,
        release_date: new Date(),
        reason: reason,
        user: {
          connect: {
            id: id,
          },
        },
      },
    });

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
