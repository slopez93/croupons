import { Request, Response } from 'express';
import { CreateUserRequest } from '../../../modules/users/application/CreateUserRequest';
import { CreateUserUseCase } from '../../../modules/users/application/CreateUserUseCase';
import { Controller } from '../Controller';

export default class CreateUserPostController implements Controller {
  private createUserUseCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    this.createUserUseCase = useCase;
  }

  async run(req: Request, res: Response) {
    const email: string = req.body.email;

    try {
      const user = await this.createUserUseCase.execute(new CreateUserRequest(email));
      res.send(user);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
