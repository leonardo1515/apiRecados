import { Request, Response } from "express";
import { Messages } from "../models/messages.models";
import { UserDatabase } from "../database/user.database";
import { ServerError } from "../errors/server.error";
import { SuccessResponse } from "../util/success.response";

export class MessagesController {
  public getAllMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const database = new UserDatabase();
      const user = database.getId(id);

      return SuccessResponse.ok(
        res,
        "Message successfull obtianed",
        user?.message
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public getMessage(req: Request, res: Response) {
    try {
      const { id, idMessage } = req.params;
      const database = new UserDatabase();
      const message = database.getOneMessag(id, idMessage);

      return SuccessResponse.ok(
        res,
        "Message successfull obtianed",
        message?.toJson()
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public createMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { message, descript } = req.body;
      let { save } = req.body;
      const database = new UserDatabase();
      const user = database.getId(id);

      const newMessage = new Messages(message, descript);
      user?.message?.push(newMessage);

      return SuccessResponse.created(
        res,
        "New message successfully created",
        user?.message
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public update(req: Request, res: Response) {
    try {
      const { id, idMessage } = req.params;
      const { message, descript, save } = req.body;
      const database = new UserDatabase();
      const curretMessage = database.getOneMessag(id, idMessage);

      if (message) {
        curretMessage!.message = message;
      }
      if (descript) {
        curretMessage!.descript = descript;
      }

      curretMessage!.save = save;

      return SuccessResponse.created(
        res,
        "Message successfully updated",
        curretMessage
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public save(req: Request, res: Response) {
    try {
      const { id, idMessage } = req.params;
      const { save } = req.body;
      const database = new UserDatabase();
      const curretMessage = database.getOneMessag(id, idMessage);

      if (save) {
        curretMessage!.save = save;
      }

      return SuccessResponse.created(
        res,
        "Message successfully updated",
        curretMessage
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public delete(req: Request, res: Response) {
    try {
      const { id, idMessage } = req.params;
      const database = new UserDatabase();
      const message = database.indexMessage(id, idMessage);

      database.deleteMessage(id, message!);

      return SuccessResponse.delete(
        res,
        "Message successfully deleted",
        idMessage
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
