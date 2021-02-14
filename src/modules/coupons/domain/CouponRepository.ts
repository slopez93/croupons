import { Coupon } from './Coupon';

export interface CouponRepository {
  create(coupon: Coupon): Promise<void>;
}
