import "reflect-metadata";
import { inject, injectable } from "inversify";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import {
  GetUsersUseCase,
  GetUserUseCaseResponse,
} from "~/components/Users/application/getUsersUseCase";
import { Controller } from "../Controller";

@injectable()
export class UsersGetController implements Controller<GetUserUseCaseResponse> {
  private useCase: GetUsersUseCase;

  constructor(@inject("GetUsersUseCase") useCase: GetUsersUseCase) {
    this.useCase = useCase;
  }

  async run(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<GetUserUseCaseResponse> {
    const users = await this.useCase.execute();

    return users;
  }
}
