import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class StatusLogMidllewareValidator {
  public static statusLogValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password } = req.query;
      const database = new UserDatabase();
      const user = database.getUserLoged(String(email), String(password));

      if (user?.status === true) {
        return RequestError.statusFalse(res);
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
