import { Request, Response } from "express";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../config/prismaClient";
import { ILastInputOutput } from "../../dtos/lastInputOutputDTO";

export class LastInputOutputUseCase {
  async execute() {
    let transactions: ILastInputOutput = {
      input: {
        user: 'Sem transacao',
        value: 0,
        release_date: null
      },
      output: {
        user: 'Sem transacao',
        value: 0,
        release_date: null
      }
    };

    //Last transaction with input value
    const transactionInput = await prisma.transaction.findFirst({
      where: {
        value: { gt: 0 }
      },
      orderBy: { release_date: 'desc' }
    })

    const userInput = await prisma.user.findFirst({
      where: {
        id: transactionInput.userId
      }
    })

    if(Number(transactionInput.value) > 0){
      transactions.input = {
        user: userInput.name, 
        value: Number(transactionInput.value),
        release_date: transactionInput.release_date
      }
    }

    //Last transaction with output value
    const transactionOutput = await prisma.transaction.findFirst({
      where: {
        value: { lt: 0 }
      },
      orderBy: { release_date: 'desc' }
    })

    const userOutput = await prisma.user.findFirst({
      where: {
        id: transactionOutput.userId
      }
    })

    if(Number(transactionOutput.value) < 0){
      transactions.output = {
        user: userOutput.name,
        value: Number(transactionOutput.value),
        release_date: transactionOutput.release_date
      }
    }
    
    return transactions
  }
}
