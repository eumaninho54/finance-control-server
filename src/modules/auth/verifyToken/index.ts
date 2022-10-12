import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../errors/appError";
import * as jwt from "jsonwebtoken";

export class VerifyTokenController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const token = req.header("x-access-token")

    if(!token){
      throw new AppError("No token provided!");
    }

    jwt.verify(token, process.env.SECRET, (err, decoded: any) => {
      if(err){
        throw new AppError("Failed to authenticate token!");
      }

      req.params.token = token
      next()
    })
  }
}