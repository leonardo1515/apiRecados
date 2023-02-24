"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogarValidatorMiddleware = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class LogarValidatorMiddleware {
    static logValidator(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                return request_error_1.RequestError.fieldNotProvided(res, "Email");
            }
            if (!password) {
                return request_error_1.RequestError.fieldNotProvided(res, "Password");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.LogarValidatorMiddleware = LogarValidatorMiddleware;
