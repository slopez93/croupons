import { Coupon } from './Coupon';
import { CouponId } from './CouponId';

export class CouponFactory {
  static create(userId: string): Coupon {
    const couponId = CouponId.random();
    return new Coupon(couponId, userId);
  }
}
