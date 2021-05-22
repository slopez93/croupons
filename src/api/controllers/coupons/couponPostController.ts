import "reflect-metadata";
import { inject, injectable } from "inversify";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { Controller } from "../Controller";
import { CreateCouponUseCase } from "~/components/Coupons/application/createCouponUseCase";
import { CreateCouponResponse } from "~/components/Coupons/application/CreateCouponResponse";

@injectable()
export class CouponPostController implements Controller<CreateCouponResponse> {
  private useCase: CreateCouponUseCase;

  constructor(@inject("CreateCouponUseCase") useCase: CreateCouponUseCase) {
    this.useCase = useCase;
  }

  async run(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<CreateCouponResponse> {
    const { name } = JSON.parse(event?.body);
    const coupon = await this.useCase.execute({ name });

    return coupon;
  }
}
