import { EventEmitter } from "events";
import { injectable } from "inversify";
import { DomainEvent } from "~/shared/domain/definitions/domainEvent";
import { DomainEventSubscriber } from "~/shared/domain/definitions/domainEventSuscriber";
import { Event } from "~/shared/domain/definitions/event";
import { EventBus } from "~/shared/domain/definitions/eventBus";

@injectable()
class EventEmit extends EventEmitter {}

@injectable()
export class AsyncEventBus implements EventBus {
  emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmit();
  }

  publish(events: DomainEvent[]): void {
    events.map((event) => this.emitter.emit(event.eventName, event));
  }

  addSubscribers(subscribers: DomainEventSubscriber<Event>[]): void {
    subscribers.map((subscriber) => {
      this.registerSubscriber(subscriber);
    });
  }

  private registerSubscriber(subscriber: DomainEventSubscriber<Event>): void {
    subscriber.subscribedTo().map((event) => {
      this.emitter.on(event.EVENT_NAME, subscriber.on.bind(event));
    });
  }
}
