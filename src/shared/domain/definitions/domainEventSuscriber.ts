import { Event, EventClass } from "./event";

export interface DomainEventSubscriber<T extends Event> {
  subscribedTo(): Array<EventClass>;

  on(event: T): Promise<void>;
}
