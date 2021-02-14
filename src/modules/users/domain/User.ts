import { AggregateRoot } from '../../../shared/domain/AggregateRoot';

export class User extends AggregateRoot {
  private _id: string;
  private _email: string;

  constructor(id: string, email: string) {
    super();
    this._id = id;
    this._email = email;
  }

  public id(): string {
    return this._id;
  }

  public email(): string {
    return this._email;
  }

  toPrimitives() {
    return {
      id: this._id,
      email: this._email,
    };
  }
}
