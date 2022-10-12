import { Request, Response } from "express";
import { AppError } from "../../../../errors/appError";
import * as crypto from "crypto-js";
import * as jwt from "jsonwebtoken";
import { LoginAdminDTO } from "../../dtos/loginAdminDTO";
import { VerifyTokenDTO } from "../../dtos/verifyTokenDTO";

export class VerifyTokenUseCase {
  async execute({ token }: VerifyTokenDTO): Promise<string> {

    if(!token){
      throw new AppError("No token provided!");
    }

    jwt.verify(token, process.env.SECRET, (err, decoded: any) => {
      if(err){
        throw new AppError("Failed to authenticate token!");
      }
    })

    return token 
  }
}
