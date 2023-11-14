import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Urls } from '@interfaces/urls.interface';
import { UrlService } from '@services/urls.service';

export class UrlController {
  public url = Container.get(UrlService);

  public getUrls = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUrlsData: Urls[] = await this.url.findAllUrls();

      res.status(200).json({ data: findAllUrlsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: Urls = req.body;
      const createUrlData: Urls = await this.url.createUrl(data);

      res.status(201).json({ data: createUrlData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
