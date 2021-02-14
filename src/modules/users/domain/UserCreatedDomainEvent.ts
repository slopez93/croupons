import { DomainEvent } from '../../../shared/domain/DomainEvent';

type UserCreatedEventBody = {
  userId: string;
  email: string;
};

export class UserCreatedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'user.created';

  readonly userId: string;
  readonly userEmail: string;

  constructor(aggregateId: string, email: string) {
    super(aggregateId, UserCreatedDomainEvent.EVENT_NAME);
    this.userId = aggregateId;
    this.userEmail = email;
  }

  toPrimitives(): UserCreatedEventBody {
    return {
      userId: this.userId,
      email: this.userEmail,
    };
  }

  static fromPrimitives(aggregateId: string, body: UserCreatedEventBody): UserCreatedDomainEvent {
      return new UserCreatedDomainEvent(aggregateId, body.email);
  }
}
