"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusLogMidllewareValidator = void 0;
const user_database_1 = require("../../database/user.database");
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class StatusLogMidllewareValidator {
    static statusLogValidator(req, res, next) {
        try {
            const { email, password } = req.query;
            const database = new user_database_1.UserDatabase();
            const user = database.getUserLoged(String(email), String(password));
            if (user?.status === true) {
                return request_error_1.RequestError.statusFalse(res);
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.StatusLogMidllewareValidator = StatusLogMidllewareValidator;
