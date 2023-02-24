import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class CreateMessagMidllewareValidator {
  public static messageValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { message, descript } = req.body;
      let { save } = req.body;

      if (!message) {
        return RequestError.fieldNotProvided(res, "Message");
      }
      if (!descript) {
        return RequestError.fieldNotProvided(res, "Descript");
      }
      if (!save) {
        save = "false";
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
