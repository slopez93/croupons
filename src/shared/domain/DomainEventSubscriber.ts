import { DomainEvent, DomainEventClass } from './DomainEvent';

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): Array<DomainEventClass>;

  on(event: T): Promise<void>;
}

