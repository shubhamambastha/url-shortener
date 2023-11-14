import { Router } from 'express';
import { UrlController } from '@controllers/urls.controller';
import { CreateUrlDto } from '@dtos/urls.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@middlewares/auth.middleware';

export class UrlRoute implements Routes {
  public path = '/urls';
  public router = Router();
  public url = new UrlController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthMiddleware, this.url.getUserUrls);
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateUrlDto), this.url.createUrl);
  }
}
