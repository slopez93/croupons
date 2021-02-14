import { DomainEvent } from '../../shared/domain/DomainEvent';
import { DomainEventSubscriber } from '../../shared/domain/DomainEventSubscriber';
import container from '../../config/di';

export function registerSubscribers() {
  const eventBus = container.get('Shared.EventBus');
  const domainSubscribers = container.findTaggedServiceIds('domainEventSubscriber');
  const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

  console.log('domainSubscribers', domainSubscribers);

  domainSubscribers.forEach((value: any, key: any) => subscribers.push(container.get(key)));
  eventBus.addSubscribers(subscribers);
}
