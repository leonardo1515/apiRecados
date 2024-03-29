import { Response } from "express";

export class RequestError {
  public static fieldNotProvided(res: Response, field: string) {
    return res.status(400).send({
      ok: false,
      message: field + " was not provided",
    });
  }

  public static passwordError(res: Response) {
    return res.status(400).send({
      ok: false,
      message: "the password must be at least 5 characters long",
    });
  }

  public static nameError(res: Response) {
    return res.status(400).send({
      ok: false,
      message: "the name must be at least 4 characters long",
    });
  }

  public static emailPassrwordError(res: Response) {
    return res.status(400).send({
      ok: false,
      message: "wrong email or password",
    });
  }

  public static notFound(res: Response, entity: string) {
    return res.status(404).send({
      ok: false,
      message: entity + " not found",
    });
  }

  public static alreadyExisting(res: Response, message: string) {
    return res.status(400).send({
      ok: false,
      message: message,
    });
  }

  public static statusFalse(res: Response) {
    return res.status(400).send({
      ok: false,
      message: "The user does not have access",
    });
  }

  public static unauthorized(res: Response) {
    return res.status(401).send({
      ok: false,
      message: "unauthorized access",
    });
  }

  public static doNotProceed(res: Response) {
    return res.status(403).send({
      ok: false,
      message: "unauthorized access",
    });
  }
}
