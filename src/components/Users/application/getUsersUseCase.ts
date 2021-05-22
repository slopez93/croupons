import { injectable } from "inversify";
import { UseCase } from "~/shared/application/useCase";
import { User } from "../domain/User";

export interface GetUserUseCaseResponse {
  users: Array<User>;
}

@injectable()
export class GetUsersUseCase extends UseCase<never, GetUserUseCaseResponse> {
  async execute(): Promise<GetUserUseCaseResponse> {
    return { users: [new User("1", "test@test.com")] };
  }
}
