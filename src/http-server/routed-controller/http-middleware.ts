import { RequestHandler } from 'express';
import { Middleware } from './../../core';

export interface HttpMiddleware<Information> extends Middleware<Information, RequestHandler> {
    priority: number;
    getRequestHandler(): RequestHandler;
}