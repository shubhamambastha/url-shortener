import { Router } from 'express';
import { RedirectController } from '@controllers/redirect.controller';
import { Routes } from '@interfaces/routes.interface';

export class RedirectRoute implements Routes {
  public router = Router();
  public redirect = new RedirectController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/:code`, this.redirect.redirectUser);
  }
}
