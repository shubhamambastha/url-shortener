import { Router } from 'express';
import { UrlController } from '@controllers/urls.controller';
import { CreateUrlDto } from '@dtos/urls.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class UrlRoute implements Routes {
  public path = '/urls';
  public router = Router();
  public url = new UrlController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.url.getUrls);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateUrlDto), this.url.createUrl);
  }
}
