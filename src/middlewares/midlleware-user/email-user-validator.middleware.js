"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorMiddleware = void 0;
const user_database_1 = require("../../database/user.database");
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class EmailValidatorMiddleware {
    static emailAlreadyExisting(req, res, next) {
        try {
            const { email } = req.body;
            const database = new user_database_1.UserDatabase();
            const user = database.getEmail(email);
            if (user) {
                return request_error_1.RequestError.alreadyExisting(res, "User already existing with this email");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.EmailValidatorMiddleware = EmailValidatorMiddleware;
