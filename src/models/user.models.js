"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(_name, _email, _password) {
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._id = (0, uuid_1.v4)();
        this._messages = [];
        this._status = false;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get message() {
        return this._messages ?? [];
    }
    get status() {
        return this._status;
    }
    set message(message) {
        this._messages = message;
    }
    set password(password) {
        this._password = password;
    }
    set name(name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }
    set status(status) {
        this._status = status;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            status: this._status,
            password: this._password,
            message: this._messages,
        };
    }
}
exports.User = User;
