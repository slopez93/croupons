import { Container } from "inversify";
import { CouponPostController } from "~/api/controllers/coupons/couponPostController";
import { CreateCouponDomainEventSubscriber } from "~/components/Coupons/application/createCouponDomainEventSubscriber";
import { CreateCouponUseCase } from "~/components/Coupons/application/createCouponUseCase";
import {
  CouponFactory,
  ICouponFactory,
} from "~/components/Coupons/domain/couponFactory";
import { DomainEvent } from "~/shared/domain/definitions/domainEvent";
import { DomainEventSubscriber } from "~/shared/domain/definitions/domainEventSuscriber";
import { Event } from "~/shared/domain/definitions/event";
import { EventBus } from "~/shared/domain/definitions/eventBus";
import { EventBusAsync } from "~/shared/domain/definitions/eventBusAsync";
import { AsyncEventBus } from "~/shared/infrastructure/eventBus/asyncEventBus";
import { SqsEventBus } from "~/shared/infrastructure/eventBus/SqsEventBus";

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
    // Bus
    container.bind<EventBusAsync>("EventBusAsync").to(SqsEventBus);
    // DomainEventSubscribers
    container
      .bind<CreateCouponDomainEventSubscriber>(
        "CreateCouponDomainEventSubscriber"
      )
      .to(CreateCouponDomainEventSubscriber)
      .inSingletonScope();

    container
      .bind<DomainEventSubscriber<Event>>("DomainEventSubscriber")
      .toConstantValue(container.get("CreateCouponDomainEventSubscriber"));

    // Event bus
    container.bind<EventBus>("EventBus").to(AsyncEventBus).inSingletonScope();
  }
}
