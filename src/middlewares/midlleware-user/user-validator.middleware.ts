import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class UserValidatorMiddleware {
  public static useValidator(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      if (!name) {
        return RequestError.fieldNotProvided(res, "Name");
      }
      if (name.length < 4) {
        return RequestError.nameError(res);
      }
      if (!email) {
        return RequestError.fieldNotProvided(res, "Email");
      }
      if (!password) {
        return RequestError.fieldNotProvided(res, "Password");
      }
      if (password.length < 5) {
        return RequestError.passwordError(res);
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
