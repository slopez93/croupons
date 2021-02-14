import { MongoRepository } from '../../../../shared/infrastructure/persistence/mongo/MongoRepository';
import { UserRepository } from '../../domain/UserRepository';
import { User } from '../../domain/User';
import { UserFactory } from '../../domain/UserFactory';

export class MongoDbUserRepository extends MongoRepository<User> implements UserRepository {
  async find(id: string): Promise<User> {
    const collection = await this.collection();

    const document = await collection.findOne({ _id: id });
    return UserFactory.create(document.email);
  }

  async create(user: User): Promise<void> {
    return await this.persist(user.id(), user);
  }

  protected moduleName(): string {
    return 'users';
  }
}
