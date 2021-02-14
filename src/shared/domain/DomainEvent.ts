import { Uuid } from './valueObject/Uuid';

type ToPrimitiveEventBody = {
  [x: string]: any;
};

export abstract class DomainEvent {
  static EVENT_NAME: string;
  readonly aggregateId: string;
  readonly eventId: string;
  readonly eventName: string;
  readonly ocurredOn: Date;

  constructor(aggregateId: string, eventName: string, eventId?: string, ocurredOn?: Date) {
    this.aggregateId = aggregateId;
    this.eventName = eventName;
    this.eventId = eventId || Uuid.random().value;
    this.ocurredOn = ocurredOn || new Date();
  }

  abstract toPrimitives(): ToPrimitiveEventBody;
}

export type DomainEventClass = { EVENT_NAME: string; fromPrimitives(...args: any[]): DomainEvent };

