import { IRole } from './role';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: IRole;
  avatar?: string;
  city?: string;
  lat?: number;
  lng?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
