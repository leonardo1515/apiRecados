import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class UpdateMessageValidatorMiddleware {
  public static updateMessageValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { message, descript, save } = req.body;

      if (!message && !descript) {
        return RequestError.fieldNotProvided(res, "Params");
      }
      if (message) {
        if (message.length < 4) {
          return RequestError.nameError(res);
        }
      }
      if (descript) {
        if (descript.length < 4) {
          return RequestError.nameError(res);
        }
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
