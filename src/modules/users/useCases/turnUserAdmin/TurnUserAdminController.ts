import { Request, Response } from "express";

import { IHeaderRequest } from "../../../interfaces/IHeaderRequest";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as IHeaderRequest;
      const userUpdated = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userUpdated);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
