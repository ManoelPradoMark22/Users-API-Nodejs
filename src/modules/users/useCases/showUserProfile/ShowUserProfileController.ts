import { Request, Response } from "express";

import { IHeaderRequest } from "../../../interfaces/IHeaderRequest";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as IHeaderRequest;

      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
