import { Request, Response } from "express";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../config/prismaClient";

export class LastInputOutputUseCase {
  async execute() {
    const transactions: {input: number, output: number} = {input: 0, output: 0}

    //Last transaction with input value
    const input = Number((await prisma.transaction.findFirst({
      where: {
        value: { gt: 0 }
      },
      orderBy: { release_date: 'desc' }
    })).value)

    input > 0
    ? transactions.input = input
    : transactions.input = 0

    //Last transaction with output value
    const output = Number((await prisma.transaction.findFirst({
      where: {
        value: { lt: 0 }
      },
      orderBy: { release_date: 'desc' }
    })).value)

    output < 0
    ? transactions.output = output
    : transactions.output = 0

    return transactions
  }
}
