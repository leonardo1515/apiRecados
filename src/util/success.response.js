"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
class SuccessResponse {
    static ok(res, message, data) {
        return res.status(200).send({
            ok: true,
            message,
            data,
        });
    }
    static created(res, message, data) {
        return res.status(201).send({
            ok: true,
            message,
            data,
        });
    }
    static delete(res, message, data) {
        return res.status(200).send({
            ok: true,
            message,
            data,
        });
    }
    static filter(res, data) {
        return res.status(200).send({
            ok: true,
            data,
        });
    }
}
exports.SuccessResponse = SuccessResponse;
