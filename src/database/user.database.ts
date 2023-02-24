import { User } from "../models/user.models";
import { users } from "./user";

export class UserDatabase {
  public getAll() {
    return [...users];
  }

  public idIndex(id: string) {
    return users.findIndex((user) => user.id === id);
  }

  public delete(index: number) {
    return users.splice(index, 1);
  }

  public filterName(name: string) {
    return users.filter((user) => user.name === name);
  }

  public filterEmail(email: string) {
    return users.filter((user) => user.email === email);
  }

  public getId(id: string) {
    return users.find((user) => user.id === id);
  }

  public getEmail(email: string) {
    return users.find((user) => user.email === email);
  }

  public getName(name: string) {
    return users.find((user) => user.name === name);
  }

  public getUserLoged(email: string, password: string) {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  }

  public create(user: User) {
    users.push(user);
  }
  // messages
  public getOneMessag(idUser: string, idMessage: string) {
    const user = users.find((curret) => curret.id === idUser);
    return user?.message?.find((message) => message.id === idMessage);
  }

  public indexMessage(id: string, idMessag: string) {
    const user = users.find((user) => user.id === id);
    return user?.message?.findIndex((message) => message.id === idMessag);
  }

  public deleteMessage(idUser: string, index: number) {
    const user = users.find((user) => user.id === idUser);
    return user?.message?.splice(index, 1);
  }
}
