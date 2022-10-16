import { Request, Response } from "express";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { CreateTransactionDTO } from "../../dtos/createTransactionDTO";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../config/prismaClient";

export class CreateTransactionUseCase {
  async execute({ id, value, reason }: CreateTransactionDTO) {
    
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
        value: value,
        release_date: new Date(),
        reason: reason,
        user: {
          connect: {
            id: 5,
          },
        },
      },
    });

    return transaction
  }
}
