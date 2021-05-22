import { inject, injectable } from "inversify";
import { UseCase } from "~/shared/application/useCase";
import { UserId } from "~/shared/domain/valueObject/UserId";
import { ICouponFactory } from "../domain/couponFactory";
import { CouponId } from "../domain/couponId";
import { CreateCouponResponse } from "./CreateCouponResponse";

export type CreateCoupongRequest = {
  name: string;
};

@injectable()
export class CreateCouponUseCase extends UseCase<
  CreateCoupongRequest,
  CreateCouponResponse
> {
  constructor(
    @inject("ICouponFactory") readonly couponFactory: ICouponFactory
  ) {
    super();
  }

  async execute(request: CreateCoupongRequest): Promise<CreateCouponResponse> {
    const coupon = this.couponFactory.create(
      CouponId.random(),
      UserId.random(),
      request.name
    );

    return new CreateCouponResponse(coupon);
  }
}
