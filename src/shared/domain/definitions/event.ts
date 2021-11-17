export interface Event {
  eventId: string;
  ocurredOn: Date;
  eventName: string;
  aggreateId: string;
  toDTO(): { [key: string]: any };
}

export type EventClass = {
  EVENT_NAME: string;
};
