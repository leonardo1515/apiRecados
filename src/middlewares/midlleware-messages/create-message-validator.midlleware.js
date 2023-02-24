"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessagMidllewareValidator = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class CreateMessagMidllewareValidator {
    static messageValidator(req, res, next) {
        try {
            const { message, descript } = req.body;
            let { save } = req.body;
            if (!message) {
                return request_error_1.RequestError.fieldNotProvided(res, "Message");
            }
            if (!descript) {
                return request_error_1.RequestError.fieldNotProvided(res, "Descript");
            }
            if (!save) {
                save = "false";
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.CreateMessagMidllewareValidator = CreateMessagMidllewareValidator;
