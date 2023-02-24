"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const uuid_1 = require("uuid");
class Messages {
    constructor(_message, _descript) {
        this._message = _message;
        this._descript = _descript;
        this._id = (0, uuid_1.v4)();
        this._save = false;
    }
    get id() {
        return this._id;
    }
    get message() {
        return this._message;
    }
    get descript() {
        return this._descript;
    }
    get save() {
        return this._save;
    }
    set message(message) {
        this._message = message;
    }
    set descript(descript) {
        this._descript = descript;
    }
    set save(save) {
        this._save = save;
    }
    toJson() {
        return {
            id: this._id,
            save: this._save,
            message: this._message,
            descript: this._descript,
        };
    }
}
exports.Messages = Messages;
