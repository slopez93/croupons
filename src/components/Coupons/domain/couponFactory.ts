import { injectable } from "inversify";
import { UserId } from "~/shared/domain/valueObject/UserId";
import { Coupon } from "./coupon";
import { CouponId } from "./couponId";
import { CreateCouponDomainEvent } from "./createCouponDomainEvent";

export interface ICouponFactory {
  create(id: CouponId, userId: UserId, name: string): Coupon;
}

@injectable()
export class CouponFactory implements ICouponFactory {
  create(id: CouponId, userId: UserId, name: string): Coupon {
    const coupon = new Coupon(id, userId, name);
    coupon.record(new CreateCouponDomainEvent({ id: coupon.id.value }));
    return coupon;
  }
}
