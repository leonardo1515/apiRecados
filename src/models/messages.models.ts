import { v4 as createUuid } from "uuid";

export class Messages {
  private _id: string;
  private _save: boolean;
  constructor(private _message: string, private _descript: string) {
    this._id = createUuid();
    this._save = false;
  }

  public get id() {
    return this._id;
  }

  public get message() {
    return this._message;
  }

  public get descript() {
    return this._descript;
  }

  public get save() {
    return this._save;
  }

  public set message(message: string) {
    this._message = message;
  }

  public set descript(descript: string) {
    this._descript = descript;
  }

  public set save(save: boolean) {
    this._save = save;
  }

  public toJson() {
    return {
      id: this._id,
      save: this._save,
      message: this._message,
      descript: this._descript,
    };
  }
}
