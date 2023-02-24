"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMessageMidllewareValidator = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class DeleteMessageMidllewareValidator {
    static deleteMessageValidator(req, res, next) {
        try {
            const { id, idMessage } = req.params;
            if (!id) {
                return request_error_1.RequestError.fieldNotProvided(res, "Id");
            }
            if (!idMessage) {
                return request_error_1.RequestError.fieldNotProvided(res, "Id of message");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.DeleteMessageMidllewareValidator = DeleteMessageMidllewareValidator;
