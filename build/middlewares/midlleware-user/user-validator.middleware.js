"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidatorMiddleware = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class UserValidatorMiddleware {
    static useValidator(req, res, next) {
        try {
            const { name, email, password } = req.body;
            if (!name) {
                return request_error_1.RequestError.fieldNotProvided(res, "Name");
            }
            if (name.length < 4) {
                return request_error_1.RequestError.nameError(res);
            }
            if (!email) {
                return request_error_1.RequestError.fieldNotProvided(res, "Email");
            }
            if (!password) {
                return request_error_1.RequestError.fieldNotProvided(res, "Password");
            }
            if (password.length < 5) {
                return request_error_1.RequestError.passwordError(res);
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.UserValidatorMiddleware = UserValidatorMiddleware;
