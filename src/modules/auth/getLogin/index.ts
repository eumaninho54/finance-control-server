import { Request, Response } from "express";
import { AppError } from "../../../errors/appError";
import { ILogin } from "../dtos/loginDTO";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";

export class AdminController {
  async handle(req: Request, res: Response) {
    const { username, password }: ILogin = req.body;

    const hashPassword = crypto.HmacSHA1(password, "password").toString()

    //Verify if exist user with param id
    if(username != process.env.ADMIN_USER || password != process.env.ADMIN_PASSWORD){
      throw new AppError("Login error!");
    }

    const token = jwt.sign({username: username}, process.env.SECRET, {})

    return res.status(201).json({
      username: username,
      auth: true,
      token: token
    });
  }
}
