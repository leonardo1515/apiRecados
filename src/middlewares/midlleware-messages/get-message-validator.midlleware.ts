import { NextFunction, Request, Response } from "express";
import { UserDatabase } from "../../database/user.database";
import { RequestError } from "../../errors/request.error";
import { ServerError } from "../../errors/server.error";

export class GetMessageMidllewareValidator {
  public static getOneMessageValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id, idMessage } = req.params;
      const database = new UserDatabase();

      if (!id) {
        return RequestError.fieldNotProvided(res, "Id of user");
      }
      if (!idMessage) {
        return RequestError.fieldNotProvided(res, "Id of message");
      }

      const message = database.getOneMessag(id, idMessage);

      if (!message) {
        return RequestError.notFound(res, "Message");
      }

      next();
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
