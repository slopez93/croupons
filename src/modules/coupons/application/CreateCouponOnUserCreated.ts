import { UserCreatedDomainEvent } from '../../../modules/users/domain/UserCreatedDomainEvent';
import { DomainEventClass } from '../../../shared/domain/DomainEvent';
import { DomainEventSubscriber } from '../../../shared/domain/DomainEventSubscriber';
import { CreateCouponRequest } from './CreateCouponRequest';
import { CreateCouponUseCase } from './CreateCouponUseCase';

export class CreateCouponOnUserCreated implements DomainEventSubscriber<UserCreatedDomainEvent> {
  private createCouponUseCase: CreateCouponUseCase;

  constructor(createCouponUseCase: CreateCouponUseCase) {
    this.createCouponUseCase = createCouponUseCase;
  }

  subscribedTo(): DomainEventClass[] {
    return [UserCreatedDomainEvent];
  }

  async on(event: UserCreatedDomainEvent): Promise<void> {
    const userId = event.userId;
    await this.createCouponUseCase.execute(new CreateCouponRequest(userId));
  }
}
