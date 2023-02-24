import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class DeleteValidatorMiddleware {
  public static deleteValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const database = new UserDatabase();

      if (!id) {
        return RequestError.fieldNotProvided(res, "Email");
      }

      const user = database.idIndex(id);

      if (user < 0) {
        return RequestError.notFound(res, "User");
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
