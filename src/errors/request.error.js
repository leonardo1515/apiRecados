"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
class RequestError {
    static fieldNotProvided(res, field) {
        return res.status(400).send({
            ok: false,
            message: field + " was not provided",
        });
    }
    static passwordError(res) {
        return res.status(400).send({
            ok: false,
            message: "the password must be at least 5 characters long",
        });
    }
    static nameError(res) {
        return res.status(400).send({
            ok: false,
            message: "the name must be at least 4 characters long",
        });
    }
    static emailPassrwordError(res) {
        return res.status(400).send({
            ok: false,
            message: "wrong email or password",
        });
    }
    static notFound(res, entity) {
        return res.status(404).send({
            ok: false,
            message: entity + " not found",
        });
    }
    static alreadyExisting(res, message) {
        return res.status(400).send({
            ok: false,
            message: message,
        });
    }
    static statusFalse(res) {
        return res.status(400).send({
            ok: false,
            message: "The user does not have access",
        });
    }
    static unauthorized(res) {
        return res.status(401).send({
            ok: false,
            message: "unauthorized access",
        });
    }
    static doNotProceed(res) {
        return res.status(403).send({
            ok: false,
            message: "unauthorized access",
        });
    }
}
exports.RequestError = RequestError;
