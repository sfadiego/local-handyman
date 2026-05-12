import { AxiosError, AxiosResponse } from 'axios';
import { ResponseStatus } from './api-handlers';

export interface ApiResult<T> {
  data: T | null;
  error: string | null;
  status: number;
}

export function handleResponse<T>(response: AxiosResponse<T>): ApiResult<T> {
  const handlers: Record<ResponseStatus, () => ApiResult<T>> = {
    200: () => ({ data: response.data, error: null, status: 200 }),
    201: () => ({ data: response.data, error: null, status: 201 }),
    204: () => ({ data: null, error: null, status: 204 }),
    400: () => ({ data: null, error: 'Solicitud inválida', status: 400 }),
    401: () => ({ data: null, error: 'No autorizado', status: 401 }),
    403: () => ({ data: null, error: 'Acceso denegado', status: 403 }),
    404: () => ({ data: null, error: 'Recurso no encontrado', status: 404 }),
    422: () => ({ data: null, error: 'Datos inválidos', status: 422 }),
    500: () => ({
      data: null,
      error: 'Error interno del servidor',
      status: 500,
    }),
  };

  const handler = handlers[response.status];
  return handler
    ? handler()
    : { data: null, error: 'Respuesta inesperada', status: response.status };
}

export function handleError<T>(error: AxiosError): ApiResult<T> {
  const status = error.response?.status ?? 500;

  const messages: Record<ResponseStatus, string> = {
    200: 'Éxito',
    201: 'Creado exitosamente',
    204: 'Sin contenido',
    400: 'Solicitud inválida',
    401: 'No autorizado',
    403: 'Acceso denegado',
    404: 'Recurso no encontrado',
    422: 'Datos inválidos',
    500: 'Error interno del servidor',
  };

  return {
    data: null,
    error: messages[status] ?? 'Error desconocido',
    status,
  };
}
