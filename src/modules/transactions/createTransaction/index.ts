import { Request, Response } from "express";
import { prisma } from "../../../config/prismaClient";
import { AppError } from "../../../errors/appError";
import { ICreateTransaction } from "../dtos/createTransactionInterface";


export class CreateTransactionController {
  async handle(req: Request, res: Response) {
    const { id, input_value, output_value }: ICreateTransaction = req.body;

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
        input_value: input_value,
        output_value: output_value,
        user: {
          connect: {
            id: 5,
          },
        },
      },
    });

    return res.status(201).json(transaction);
  }
}
