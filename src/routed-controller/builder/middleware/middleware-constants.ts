import { Handler } from './handler';

export const DEFAULT_MIDDLEWARE_PRIORITY: number = 1;
export const HANDLE_REQUEST: keyof Handler<any> = "handleRequest";
