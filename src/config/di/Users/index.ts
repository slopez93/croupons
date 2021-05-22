import { Container } from "inversify";
import { UsersGetController } from "~/api/controllers/users/usersGetController";
import { GetUsersUseCase } from "~/components/Users/application/getUsersUseCase";

export class UserContainer {
  register(container: Container): void {
    // Controllers
    container
      .bind<UsersGetController>("UsersGetController")
      .to(UsersGetController);
    // Use cases
    container.bind<GetUsersUseCase>("GetUsersUseCase").to(GetUsersUseCase);
  }
}
