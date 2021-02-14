import { AggregateRoot } from '../../../shared/domain/AggregateRoot';

export class Coupon extends AggregateRoot {
  private _userId;
  private _couponId: string;

  constructor(couponId: string, userId: string) {
    super();
    this._userId = userId;
    this._couponId = couponId;
  }

  public userId(): string {
    return this._userId;
  }

  public couponId(): string {
    return this._couponId;
  }

  toPrimitives() {
    return {
      userId: this._userId,
      couponId: this._couponId,
    };
  }
}
