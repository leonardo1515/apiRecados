"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageValidatorMiddleware = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class UpdateMessageValidatorMiddleware {
    static updateMessageValidator(req, res, next) {
        try {
            const { message, descript, save } = req.body;
            if (!message && !descript) {
                return request_error_1.RequestError.fieldNotProvided(res, "Params");
            }
            if (message) {
                if (message.length < 4) {
                    return request_error_1.RequestError.nameError(res);
                }
            }
            if (descript) {
                if (descript.length < 4) {
                    return request_error_1.RequestError.nameError(res);
                }
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.UpdateMessageValidatorMiddleware = UpdateMessageValidatorMiddleware;
