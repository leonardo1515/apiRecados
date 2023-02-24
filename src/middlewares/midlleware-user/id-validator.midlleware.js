"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdValidatorMiddleware = void 0;
const user_database_1 = require("../../database/user.database");
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class GetByIdValidatorMiddleware {
    static idValidator(req, res, next) {
        try {
            const { id } = req.params;
            const database = new user_database_1.UserDatabase();
            const users = database.getId(String(id));
            if (!id) {
                return request_error_1.RequestError.fieldNotProvided(res, "Id");
            }
            if (!users) {
                return request_error_1.RequestError.notFound(res, "User");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.GetByIdValidatorMiddleware = GetByIdValidatorMiddleware;
