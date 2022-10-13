import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { LoginAdminDTO } from "../../dtos/loginAdminDTO";

export class LoginAdminUseCase {
  async execute({ username, password }: LoginAdminDTO) {
    const hashPasswordToVerif = crypto.HmacSHA1(password, "password").toString()
    const hashPassowordEnv = crypto.HmacSHA1(process.env.ADMIN_PASSWORD, "password").toString()

    if(username != process.env.ADMIN_USER || hashPasswordToVerif != hashPassowordEnv){
      throw new AppError("Login error!");
    }

    const token = jwt.sign({username: username}, process.env.SECRET, {})

    const admin = {
      username: username,
      auth: true,
      token: token
    }

    return admin
  }
}
