import { injectable } from "inversify";

@injectable()
export abstract class UseCase<TRequest, TResponse> {
  abstract execute(request: TRequest): Promise<TResponse>;
}
