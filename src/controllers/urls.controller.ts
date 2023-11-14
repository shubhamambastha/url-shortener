import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Urls } from '@interfaces/urls.interface';
import { User } from '@interfaces/users.interface';
import { UrlService } from '@services/urls.service';
import { RequestWithUser } from '@interfaces/auth.interface';

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

  public getUserUrls = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user: User = req.user;
      const findUserUrlsData: Urls[] = await this.url.findUserUrls(user);

      res.status(200).json({ data: findUserUrlsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createUrl = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { body: data, user }: { body: Urls; user: User } = req;
      const createUrlData: Urls = await this.url.createUrl(data, user);

      res.status(201).json({ data: createUrlData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
