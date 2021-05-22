import { Container } from "inversify";
import { CouponPostController } from "~/api/controllers/coupons/couponPostController";
import { CreateCouponUseCase } from "~/components/Coupons/application/createCouponUseCase";
import {
  CouponFactory,
  ICouponFactory,
} from "~/components/Coupons/domain/couponFactory";

export class CouponsContainer {
  register(container: Container): void {
    // Factories
    container.bind<ICouponFactory>("ICouponFactory").to(CouponFactory);
    // Usecases
    container
      .bind<CreateCouponUseCase>("CreateCouponUseCase")
      .to(CreateCouponUseCase);
    // Controllers
    container
      .bind<CouponPostController>("CouponPostController")
      .to(CouponPostController);
  }
}
