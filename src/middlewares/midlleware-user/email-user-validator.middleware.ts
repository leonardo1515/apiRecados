import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class EmailValidatorMiddleware {
  public static emailAlreadyExisting(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email } = req.body;
      const database = new UserDatabase();
      const user = database.getEmail(email);

      if (user) {
        return RequestError.alreadyExisting(
          res,
          "User already existing with this email"
        );
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
