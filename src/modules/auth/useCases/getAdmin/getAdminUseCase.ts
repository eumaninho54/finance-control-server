import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { GetAdminDTO } from "../../dtos/getAdminDTO";

export class GetAdminUseCase {
  async execute({ token }: GetAdminDTO) {
    const admin = {
      username: process.env.ADMIN_USER,
      auth: true,
      token: token,
    };

    return admin;
  }
}
