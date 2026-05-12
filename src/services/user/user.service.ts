import { ApiResult, handleError, handleResponse } from '@/lib/response';
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
}): Promise<ApiResult<User>> => {
  try {
    const response = await api.get<User>('/users/search', { params });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const getUser = async (id: string): Promise<ApiResult<User>> => {
  try {
    const response = await api.get<User>(`/users/${id}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const createUser = async (data: User): Promise<ApiResult<User>> => {
  try {
    const response = await api.post<User>('/users', data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const updateUser = async (
  userId: string,
  data: Partial<User>
): Promise<ApiResult<User>> => {
  try {
    const response = await api.put<User>('/users', { userId, data });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
