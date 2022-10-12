import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { LoginAdminDTO } from "../../dtos/loginAdminDTO";

export class LoginAdminUseCase {
  async execute({ username, password }: LoginAdminDTO) {
    const hashPassword = crypto.HmacSHA1(password, "password").toString()

    //Verify if exist user with param id
    if(username != process.env.ADMIN_USER || password != process.env.ADMIN_PASSWORD){
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
