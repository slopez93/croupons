import { Uuid } from "../valueObject/uuid";

export abstract class DomainEvent {
  static EVENT_NAME: string;
  readonly aggreateId: string;
  readonly eventId: string;
  readonly ocurredOn: Date;
  readonly eventName: string;

  constructor(
    eventName: string,
    aggregateId: string,
    eventId?: string,
    ocurredOn?: Date
  ) {
    this.eventName = eventName;
    this.aggreateId = aggregateId;
    this.eventId = eventId || Uuid.random().value;
    this.ocurredOn = ocurredOn || new Date();
  }

  abstract toDTO(): Record<string, unknown>;
}
