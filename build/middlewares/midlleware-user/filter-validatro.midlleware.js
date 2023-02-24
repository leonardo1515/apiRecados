"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterValidatorMiddleware = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class FilterValidatorMiddleware {
    static filterValidator(req, res, next) {
        try {
            const { name, email } = req.query;
            if (!name && !email) {
                return request_error_1.RequestError.fieldNotProvided(res, "Params to filter");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.FilterValidatorMiddleware = FilterValidatorMiddleware;
