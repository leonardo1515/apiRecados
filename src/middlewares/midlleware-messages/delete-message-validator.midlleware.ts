import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class DeleteMessageMidllewareValidator {
  public static deleteMessageValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id, idMessage } = req.params;

      if (!id) {
        return RequestError.fieldNotProvided(res, "Id");
      }
      if (!idMessage) {
        return RequestError.fieldNotProvided(res, "Id of message");
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
