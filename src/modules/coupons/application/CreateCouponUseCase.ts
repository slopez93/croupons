import { CouponFactory } from '../domain/CouponFactory';
import { CouponRepository } from '../domain/CouponRepository';
import { CreateCouponRequest } from './CreateCouponRequest';
import { CreateCouponResponse } from './CreateCouponResponse';

export class CreateCouponUseCase {
  private repository: CouponRepository;

  constructor(repository: CouponRepository) {
    this.repository = repository;
  }

  async execute(request: CreateCouponRequest): Promise<CreateCouponResponse> {
    const coupon = CouponFactory.create(request.userId);

    await this.repository.create(coupon);

    return new CreateCouponResponse(coupon.couponId());
  }
}
