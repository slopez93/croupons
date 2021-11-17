import { inject, injectable } from "inversify";
import { UseCase } from "~/shared/application/useCase";
import { EventBus } from "~/shared/domain/definitions/eventBus";
import { EventBusAsync } from "~/shared/domain/definitions/eventBusAsync";
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
  private sqsEventBus: EventBusAsync;
  private eventBus: EventBus;

  constructor(
    @inject("ICouponFactory") readonly couponFactory: ICouponFactory,
    @inject("EventBusAsync") sqsEventBus: EventBusAsync,
    @inject("EventBus") eventBus: EventBus
  ) {
    super();
    this.eventBus = eventBus;
    this.sqsEventBus = sqsEventBus;
  }

  async execute(request: CreateCoupongRequest): Promise<CreateCouponResponse> {
    const coupon = this.couponFactory.create(
      CouponId.random(),
      UserId.random(),
      request.name
    );

    // this.sqsEventBus.publish(coupon.pullDomainEvents());
    this.eventBus.publish(coupon.pullDomainEvents());

    return new CreateCouponResponse(coupon);
  }
}
