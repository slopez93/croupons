import { EventBus } from '../../../shared/domain/EventBus';
import { UserFactory } from '../domain/UserFactory';
import { UserRepository } from '../domain/UserRepository';
import { CreateUserRequest } from './CreateUserRequest';
import { CreateUserResponse } from './CreateUserResponse';

export class CreateUserUseCase {
  private eventBus: EventBus;
  private repository: UserRepository;

  constructor(eventBus: EventBus, repository: UserRepository) {
    this.eventBus = eventBus;
    this.repository = repository;
  }

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const email = request.email();

    const user = UserFactory.create(email);

    this.repository.create(user);

    this.eventBus.publish(user.pullDomainEvents());

    return new CreateUserResponse(user.id(), user.email());
  }
}
