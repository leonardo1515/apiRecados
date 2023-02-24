"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const messages_models_1 = require("../models/messages.models");
const user_database_1 = require("../database/user.database");
const server_error_1 = require("../errors/server.error");
const success_response_1 = require("../util/success.response");
class MessagesController {
    getAllMessage(req, res) {
        try {
            const { id } = req.params;
            const database = new user_database_1.UserDatabase();
            const user = database.getId(id);
            return success_response_1.SuccessResponse.ok(res, "Message successfull obtianed", user?.message);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    getMessage(req, res) {
        try {
            const { id, idMessage } = req.params;
            const database = new user_database_1.UserDatabase();
            const message = database.getOneMessag(id, idMessage);
            return success_response_1.SuccessResponse.ok(res, "Message successfull obtianed", message?.toJson());
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    createMessage(req, res) {
        try {
            const { id } = req.params;
            const { message, descript } = req.body;
            let { save } = req.body;
            const database = new user_database_1.UserDatabase();
            const user = database.getId(id);
            const newMessage = new messages_models_1.Messages(message, descript);
            user?.message?.push(newMessage);
            return success_response_1.SuccessResponse.created(res, "New message successfully created", user?.message);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    update(req, res) {
        try {
            const { id, idMessage } = req.params;
            const { message, descript, save } = req.body;
            const database = new user_database_1.UserDatabase();
            const curretMessage = database.getOneMessag(id, idMessage);
            if (message) {
                curretMessage.message = message;
            }
            if (descript) {
                curretMessage.descript = descript;
            }
            curretMessage.save = save;
            return success_response_1.SuccessResponse.created(res, "Message successfully updated", curretMessage);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    save(req, res) {
        try {
            const { id, idMessage } = req.params;
            const { save } = req.body;
            const database = new user_database_1.UserDatabase();
            const curretMessage = database.getOneMessag(id, idMessage);
            if (save) {
                curretMessage.save = save;
            }
            return success_response_1.SuccessResponse.created(res, "Message successfully updated", curretMessage);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    delete(req, res) {
        try {
            const { id, idMessage } = req.params;
            const database = new user_database_1.UserDatabase();
            const message = database.indexMessage(id, idMessage);
            database.deleteMessage(id, message);
            return success_response_1.SuccessResponse.delete(res, "Message successfully deleted", idMessage);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.MessagesController = MessagesController;
