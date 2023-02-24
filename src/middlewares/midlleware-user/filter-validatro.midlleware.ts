import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class FilterValidatorMiddleware {
  public static filterValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, email } = req.query;

      if (!name && !email) {
        return RequestError.fieldNotProvided(res, "Params to filter");
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
