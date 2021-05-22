import { AgregatteRoot } from "~/shared/domain/definitions/agregateRoot";
import { UserId } from "~/shared/domain/valueObject/UserId";
import { CouponId } from "./couponId";

export class Coupon extends AgregatteRoot {
  private _id: CouponId;
  private _userId: UserId;
  private _name: string;

  constructor(id: CouponId, userId: UserId, name: string) {
    super();
    this._id = id;
    this._userId = userId;
    this._name = name;
  }

  public get id() {
    return this._id;
  }

  public get userId() {
    return this._userId;
  }

  public get name() {
    return this._name;
  }

  toDTO(): Record<string, unknown> {
    return {
      id: this.id,
      userId: this.userId,
    };
  }
}
