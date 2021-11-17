import container from "~/config/di";
import { DomainEvent } from "~/shared/domain/definitions/domainEvent";
import { DomainEventSubscriber } from "~/shared/domain/definitions/domainEventSuscriber";
import { EventBus } from "~/shared/domain/definitions/eventBus";

export function registerDomainEventSubscribers(): void {
  const eventBus = container.get("EventBus") as EventBus;
  const subscribers = container.getAll("DomainEventSubscriber") as Array<
    DomainEventSubscriber<DomainEvent>
  >;
  eventBus.addSubscribers(subscribers);
}
