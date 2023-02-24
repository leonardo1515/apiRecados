"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteValidatorMiddleware = void 0;
const user_database_1 = require("../../database/user.database");
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class DeleteValidatorMiddleware {
    static deleteValidator(req, res, next) {
        try {
            const { id } = req.params;
            const database = new user_database_1.UserDatabase();
            if (!id) {
                return request_error_1.RequestError.fieldNotProvided(res, "Email");
            }
            const user = database.idIndex(id);
            if (user < 0) {
                return request_error_1.RequestError.notFound(res, "User");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.DeleteValidatorMiddleware = DeleteValidatorMiddleware;
