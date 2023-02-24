"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
const user_1 = require("./user");
class UserDatabase {
    getAll() {
        return [...user_1.users];
    }
    idIndex(id) {
        return user_1.users.findIndex((user) => user.id === id);
    }
    delete(index) {
        return user_1.users.splice(index, 1);
    }
    filterName(name) {
        return user_1.users.filter((user) => user.name === name);
    }
    filterEmail(email) {
        return user_1.users.filter((user) => user.email === email);
    }
    getId(id) {
        return user_1.users.find((user) => user.id === id);
    }
    getEmail(email) {
        return user_1.users.find((user) => user.email === email);
    }
    getName(name) {
        return user_1.users.find((user) => user.name === name);
    }
    getUserLoged(email, password) {
        return user_1.users.find((user) => user.email === email && user.password === password);
    }
    create(user) {
        user_1.users.push(user);
    }
    // messages
    getOneMessag(idUser, idMessage) {
        const user = user_1.users.find((curret) => curret.id === idUser);
        return user?.message?.find((message) => message.id === idMessage);
    }
    indexMessage(id, idMessag) {
        const user = user_1.users.find((user) => user.id === id);
        return user?.message?.findIndex((message) => message.id === idMessag);
    }
    deleteMessage(idUser, index) {
        const user = user_1.users.find((user) => user.id === idUser);
        return user?.message?.splice(index, 1);
    }
}
exports.UserDatabase = UserDatabase;
