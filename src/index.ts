import "express-async-errors"
import { AppError } from './errors/appError';
import * as express from "express";
import * as bodyParser from "body-parser";
import { routes } from "./routes";
import * as cors from "cors";
import { NextFunction, Response } from 'express';

const app = express();

app.use(express.json());

app.use(routes);

app.use(cors());

// Error Handling
app.use((err: Error, request: express.Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(process.env.PORT || 3333, () => console.log("MEU PAU"));
