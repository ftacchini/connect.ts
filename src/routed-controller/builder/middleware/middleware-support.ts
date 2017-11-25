import { ControllerActivator } from '../../activator/controller-activator';
import { ServerSupport } from './../../../server/server-support';

export type MiddlewareSupport<Information> = { 
    support: ServerSupport,
    activator: new(...params: any[]) => ControllerActivator<any, any>
 };
