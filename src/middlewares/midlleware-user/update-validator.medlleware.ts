import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class UpdateValidatorMiddleware {
  public static updateValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, password } = req.body;

      if (!name && !password) {
        return RequestError.fieldNotProvided(res, "Name and password");
      }
      if (name.length < 4) {
        return RequestError.nameError(res);
      }
      if (password.length < 4) {
        return RequestError.passwordError(res);
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
