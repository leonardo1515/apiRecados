"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_models_1 = require("../models/user.models");
const user_database_1 = require("../database/user.database");
const request_error_1 = require("../errors/request.error");
const server_error_1 = require("../errors/server.error");
const success_response_1 = require("../util/success.response");
class UserController {
    filter(req, res) {
        try {
            const { name, email } = req.query;
            const database = new user_database_1.UserDatabase();
            if (name) {
                const user = database.filterName(String(name));
                if (!user) {
                    return request_error_1.RequestError.notFound(res, "User");
                }
                return success_response_1.SuccessResponse.filter(res, user);
            }
            if (email) {
                const user = database.filterEmail(String(email));
                if (!user) {
                    return request_error_1.RequestError.notFound(res, "User");
                }
                return success_response_1.SuccessResponse.filter(res, user);
            }
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    getAll(req, res) {
        try {
            const database = new user_database_1.UserDatabase();
            const allUsers = database.getAll();
            return success_response_1.SuccessResponse.ok(res, "User successfull obtianed", allUsers);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    log(req, res) {
        try {
            const { email, password } = req.body;
            const database = new user_database_1.UserDatabase();
            const user = database.getEmail(String(email));
            if (!user) {
                return request_error_1.RequestError.unauthorized(res);
            }
            if (user?.password !== String(password)) {
                return request_error_1.RequestError.doNotProceed(res);
            }
            user.status = true;
            return success_response_1.SuccessResponse.ok(res, "User successfull obtianed", user.toJson());
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    logoff(req, res) {
        try {
            const { id } = req.params;
            const database = new user_database_1.UserDatabase();
            const user = database.getId(id);
            user.status = false;
            return success_response_1.SuccessResponse.ok(res, "Successfully edited usuario", user?.status);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    create(req, res) {
        try {
            const { name, email, password } = req.body;
            const database = new user_database_1.UserDatabase();
            const newUser = database.create(new user_models_1.User(name, email, password));
            const getUser = database.getEmail(email);
            return success_response_1.SuccessResponse.created(res, "New user successfully created", getUser?.toJson());
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    delete(req, res) {
        try {
            const { id } = req.params;
            const database = new user_database_1.UserDatabase();
            const user = database.idIndex(id);
            database.delete(user);
            return success_response_1.SuccessResponse.ok(res, "User successfully deleted", user);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
    update(req, res) {
        try {
            const { id } = req.params;
            const { name, password } = req.body;
            const database = new user_database_1.UserDatabase();
            const user = database.getId(id);
            if (name) {
                user.name = String(name);
            }
            if (password) {
                user.password = String(password);
            }
            return success_response_1.SuccessResponse.created(res, "User successfully updated", user);
        }
        catch (error) {
            return server_error_1.ServerError.genericError(res, error);
        }
    }
}
exports.UserController = UserController;
