import type { User } from '@prisma/client';
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const searchUser = async (params: {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: string;
}): Promise<User> => {
  const response = await api.get<User>('/users/search', { params });
  return response.data;
};

export const getUser = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const createUser = async (data: User): Promise<User> => {
  const response = await api.post<User>('/users', data);
  return response.data;
};

export const updateUser = async (
  userId: string,
  data: Partial<User>
): Promise<User> => {
  const response = await api.put<User>('/users', { userId, data });
  return response.data;
};
