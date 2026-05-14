import { NextResponse } from 'next/server';
export type ResponseStatus =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 404
  | 422
  | 500;
export const ok = <T>(data: T, status: ResponseStatus = 200) =>
  NextResponse.json({ success: true, data }, { status });

export const fail = (error: string, status: ResponseStatus) =>
  NextResponse.json({ success: false, error }, { status });
