import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UrlEntity } from '@entities/urls.entity';
import { HttpException } from '@/exceptions/httpException';
import { Urls } from '@interfaces/urls.interface';
import { intToRadix64, radix64ToInt } from '@/utils/radix';

@Service()
@EntityRepository()
export class UrlService extends Repository<UrlEntity> {
  private genRandomShortcode() {
    const randomInt = Math.floor(Math.random() * Math.pow(2, 48));
    const shortCode = intToRadix64(randomInt);
    return shortCode;
  }

  private async createSpecificShortCode(shortCode: string, longUrl: string): Promise<Urls> {
    const shortCodeInt = radix64ToInt(shortCode);
    const createUserData: Urls = await UrlEntity.create({ id: shortCodeInt, longUrl, shortCode }).save();

    return createUserData;
  }

  public async findAllUrls(): Promise<Urls[]> {
    const urls: Urls[] = await UrlEntity.find();
    return urls;
  }

  public async createUrl(data: Urls): Promise<Urls> {
    const findUrl: Urls = await UrlEntity.findOne({ where: { longUrl: data.longUrl } });
    if (findUrl) throw new HttpException(409, `This url ${data.longUrl} already exists`);

    const shortCode = this.genRandomShortcode();

    const findShortCode: Urls = await UrlEntity.findOne({ where: { shortCode: shortCode } });
    if (findShortCode) {
      return this.createUrl(data);
    }

    return this.createSpecificShortCode(shortCode, data.longUrl);
  }
}
