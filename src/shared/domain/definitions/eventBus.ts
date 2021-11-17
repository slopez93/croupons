import { DomainEvent } from "./domainEvent";
import { DomainEventSubscriber } from "./domainEventSuscriber";

export interface EventBus {
  publish(events: DomainEvent[]): void;
  addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void;
}
