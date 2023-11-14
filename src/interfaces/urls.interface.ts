import { User } from '@interfaces/users.interface';

export interface Urls {
  id?: number;
  longUrl: string;
  shortCode: string;
  owner: User;
}
