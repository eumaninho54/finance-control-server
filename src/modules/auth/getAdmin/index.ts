import { Request, Response } from "express";
import { AppError } from "../../../errors/appError";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { IGetAdmin } from "../dtos/loginDTO";

export class GetAdminController {
  async handle(req: Request, res: Response) {
    const { token }: IGetAdmin = req.body;

    return res.status(201).json({
      username: process.env.ADMIN_USER,
      auth: true,
      token: token
    });
  }
}
