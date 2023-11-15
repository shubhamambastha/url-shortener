import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Urls } from '@interfaces/urls.interface';
import { UrlService } from '@services/urls.service';

export class RedirectController {
  public url = Container.get(UrlService);

  public redirectUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { code } = req.params;
      if (code.length > 9) res.redirect('https://www.google.com');

      const findUrl: Urls = await this.url.findUrlByCode(code);
      if (!findUrl) res.redirect('https://www.google.com');
      res.redirect(findUrl.longUrl);
    } catch (error) {
      next(error);
    }
  };
}
