"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessageMidllewareValidator = void 0;
const user_database_1 = require("../../database/user.database");
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class GetMessageMidllewareValidator {
    static getOneMessageValidator(req, res, next) {
        try {
            const { id, idMessage } = req.params;
            const database = new user_database_1.UserDatabase();
            if (!id) {
                return request_error_1.RequestError.fieldNotProvided(res, "Id of user");
            }
            if (!idMessage) {
                return request_error_1.RequestError.fieldNotProvided(res, "Id of message");
            }
            const message = database.getOneMessag(id, idMessage);
            if (!message) {
                return request_error_1.RequestError.notFound(res, "Message");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.GetMessageMidllewareValidator = GetMessageMidllewareValidator;
