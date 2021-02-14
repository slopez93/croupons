import { MongoRepository } from '../../../../shared/infrastructure/persistence/mongo/MongoRepository';
import { Coupon } from '../../domain/Coupon';
import { CouponRepository } from '../../domain/CouponRepository';

export class MongoDbCouponsRepository extends MongoRepository<Coupon> implements CouponRepository {
  async create(coupon: Coupon): Promise<void> {
    return await this.persist(coupon.couponId(), coupon);
  }

  protected moduleName(): string {
    return 'coupons';
  }
}
