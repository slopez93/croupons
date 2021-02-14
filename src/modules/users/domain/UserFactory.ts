import { User } from './user';
import { UserCreatedDomainEvent } from './UserCreatedDomainEvent';
import { UserId } from './UserId';

export class UserFactory {
  static create(email: string): User {
    const id = UserId.random().value;
    const user = new User(id, email);
    user.record(new UserCreatedDomainEvent(user.id(), user.email()));

    return user;
  }
}
