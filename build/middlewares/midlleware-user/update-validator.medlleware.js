"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateValidatorMiddleware = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class UpdateValidatorMiddleware {
    static updateValidator(req, res, next) {
        try {
            const { name, password } = req.body;
            if (!name && !password) {
                return request_error_1.RequestError.fieldNotProvided(res, "Name and password");
            }
            if (name.length < 4) {
                return request_error_1.RequestError.nameError(res);
            }
            if (password.length < 4) {
                return request_error_1.RequestError.passwordError(res);
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.UpdateValidatorMiddleware = UpdateValidatorMiddleware;
