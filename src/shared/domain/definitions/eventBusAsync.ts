import { Event } from "./event";

export interface EventBusAsync {
  publish<T extends Event>(message: T[]): Promise<void>;
}
