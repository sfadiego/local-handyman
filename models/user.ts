import { IRole } from './role';

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  password: string;
  role: IRole;
  avatarUrl: string | null;
  lat?: number;
  lng?: number;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}
