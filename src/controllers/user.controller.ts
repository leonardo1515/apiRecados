import { Request, Response } from "express";
import { User } from "../models/user.models";
import { UserDatabase } from "../database/user.database";
import { RequestError } from "../errors/request.error";
import { ServerError } from "../errors/server.error";
import { SuccessResponse } from "../util/success.response";

export class UserController {
  public filter(req: Request, res: Response) {
    try {
      const { name, email } = req.query;
      const database = new UserDatabase();

      if (name) {
        const user = database.filterName(String(name));
        if (!user) {
          return RequestError.notFound(res, "User");
        }
        return SuccessResponse.filter(res, user);
      }
      if (email) {
        const user = database.filterEmail(String(email));
        if (!user) {
          return RequestError.notFound(res, "User");
        }
        return SuccessResponse.filter(res, user);
      }
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public getAll(req: Request, res: Response) {
    try {
      const database = new UserDatabase();
      const allUsers = database.getAll();

      return SuccessResponse.ok(res, "User successfull obtianed", allUsers);
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public log(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const database = new UserDatabase();
      const user = database.getEmail(String(email));

      if (!user) {
        return RequestError.unauthorized(res);
      }

      if (user?.password !== String(password)) {
        return RequestError.doNotProceed(res);
      }

      user!.status = true;

      return SuccessResponse.ok(
        res,
        "User successfull obtianed",
        user.toJson()
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public logoff(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const database = new UserDatabase();
      const user = database.getId(id);

      user!.status = false;

      return SuccessResponse.ok(
        res,
        "Successfully edited usuario",
        user?.status
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const database = new UserDatabase();
      const newUser = database.create(new User(name, email, password));
      const getUser = database.getEmail(email);

      return SuccessResponse.created(
        res,
        "New user successfully created",
        getUser?.toJson()
      );
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const database = new UserDatabase();
      const user = database.idIndex(id);

      database.delete(user);

      return SuccessResponse.ok(res, "User successfully deleted", user);
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }

  public update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, password } = req.body;
      const database = new UserDatabase();
      const user = database.getId(id);

      if (name) {
        user!.name = String(name);
      }

      if (password) {
        user!.password = String(password);
      }

      return SuccessResponse.created(res, "User successfully updated", user);
    } catch (error: any) {
      return ServerError.genericError(res, error);
    }
  }
}
