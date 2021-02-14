export class CreateUserRequest {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  public email(): string {
    return this._email;
  }
}
