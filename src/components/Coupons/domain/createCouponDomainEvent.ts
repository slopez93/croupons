import { DomainEvent } from "~/shared/domain/definitions/domainEvent";

export class CreateCouponDomainEvent extends DomainEvent {
  static EVENT_NAME = "coupons.created";

  readonly id: string;

  constructor({
    id,
    eventId,
    occurredOn,
  }: {
    id: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super(CreateCouponDomainEvent.EVENT_NAME, id, eventId, occurredOn);
    this.id = id;
  }

  toDTO(): Record<string, unknown> {
    const { id, ocurredOn } = this;
    return { couponId: id, ocurredOn };
  }
}
