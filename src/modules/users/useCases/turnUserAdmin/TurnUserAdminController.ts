import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const userUpdated = this.turnUserAdminUseCase.execute({ user_id });

    return response.json(userUpdated);
  }
}

export { TurnUserAdminController };
