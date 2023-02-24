import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { MessagesController } from "../controllers/messages.controller";
import { UserValidatorMiddleware } from "../middlewares/midlleware-user/user-validator.middleware";
import { EmailValidatorMiddleware } from "../middlewares/midlleware-user/email-user-validator.middleware";
import { LogarValidatorMiddleware } from "../middlewares/midlleware-user/loged-validator.middleware";
import { UpdateValidatorMiddleware } from "../middlewares/midlleware-user/update-validator.medlleware";
import { DeleteValidatorMiddleware } from "../middlewares/midlleware-user/delete-validator.midlleware";
import { FilterValidatorMiddleware } from "../middlewares/midlleware-user/filter-validatro.midlleware";
import { GetByIdValidatorMiddleware } from "../middlewares/midlleware-user/id-validator.midlleware";
import { CreateMessagMidllewareValidator } from "../middlewares/midlleware-messages/create-message-validator.midlleware";
import { DeleteMessageMidllewareValidator } from "../middlewares/midlleware-messages/delete-message-validator.midlleware";
import { GetMessageMidllewareValidator } from "../middlewares/midlleware-messages/get-message-validator.midlleware";
import { UpdateMessageValidatorMiddleware } from "../middlewares/midlleware-messages/update-validator.medlleware";

export const userRoutes = () => {
  const app = Router();

  app.get("/", new UserController().getAll);

  app.get(
    "/filter",
    FilterValidatorMiddleware.filterValidator,
    new UserController().filter
  );

  app.post(
    "/log",
    LogarValidatorMiddleware.logValidator,
    new UserController().log
  );

  app.put(
    "/:id/logoff",
    GetByIdValidatorMiddleware.idValidator,
    new UserController().logoff
  );

  app.post(
    "/create",
    UserValidatorMiddleware.useValidator,
    EmailValidatorMiddleware.emailAlreadyExisting,
    new UserController().create
  );

  app.put(
    "/:id/update",
    GetByIdValidatorMiddleware.idValidator,
    UpdateValidatorMiddleware.updateValidator,
    new UserController().update
  );

  app.delete(
    "/:id/delete",
    DeleteValidatorMiddleware.deleteValidator,
    new UserController().delete
  );

  // messages
  app.get(
    "/:id/messages",
    GetByIdValidatorMiddleware.idValidator,
    new MessagesController().getAllMessage
  );

  app.get(
    "/:id/messages/:idMessage",
    GetByIdValidatorMiddleware.idValidator,
    GetMessageMidllewareValidator.getOneMessageValidator,
    new MessagesController().getMessage
  );

  app.post(
    "/:id/messages/create",
    GetByIdValidatorMiddleware.idValidator,
    CreateMessagMidllewareValidator.messageValidator,
    new MessagesController().createMessage
  );

  app.put(
    "/:id/messages/:idMessage/update",
    UpdateMessageValidatorMiddleware.updateMessageValidator,
    GetByIdValidatorMiddleware.idValidator,
    GetMessageMidllewareValidator.getOneMessageValidator,
    new MessagesController().update
  );

  app.delete(
    "/:id/messages/:idMessage/delete",
    DeleteMessageMidllewareValidator.deleteMessageValidator,
    GetByIdValidatorMiddleware.idValidator,
    GetMessageMidllewareValidator.getOneMessageValidator,
    new MessagesController().delete
  );

  return app;
};
