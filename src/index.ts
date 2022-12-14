import "express-async-errors"
import { AppError } from './errors/appError';
import * as express from "express";
import * as bodyParser from "body-parser";
import { routes } from "./routes";
import * as cors from "cors";
import { NextFunction, Response, Request } from 'express';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

// Error Handling
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  next()
})

app.listen(process.env.PORT || 3333, () => console.log("Working"));
