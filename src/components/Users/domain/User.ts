export class User {
  private readonly _id: string;
  private _email: string;

  constructor(id: string, email: string) {
    this._id = id;
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }

  public get id(): string {
    return this._id;
  }
}
