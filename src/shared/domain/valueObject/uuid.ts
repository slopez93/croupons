import { v4 } from "uuid";
import validate from "uuid-validate";

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this._ensureIsValidUuid(value);

    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  private _ensureIsValidUuid(value: string): void {
    if (!validate(value)) {
      throw new Error(`Invalid uuid for ${value}`);
    }
  }
}
