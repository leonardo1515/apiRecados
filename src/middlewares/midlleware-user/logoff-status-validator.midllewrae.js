"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoffStatusMidllewareValidator = void 0;
const request_error_1 = require("../../errors/request.error");
const server_error_1 = require("../../errors/server.error");
class LogoffStatusMidllewareValidator {
    static logoffValidator(req, res, next) {
        try {
            const { status } = req.body;
            if (!status) {
                return request_error_1.RequestError.fieldNotProvided(res, "Status");
            }
            next();
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.LogoffStatusMidllewareValidator = LogoffStatusMidllewareValidator;
