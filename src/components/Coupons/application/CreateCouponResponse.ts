import { Coupon } from "../domain/coupon";

export class CreateCouponResponse {
  readonly id: string;
  readonly name: string;

  constructor(coupon: Coupon) {
    this.id = coupon.id.value;
    this.name = coupon.name;
  }
}
