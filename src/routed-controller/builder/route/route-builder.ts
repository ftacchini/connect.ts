import { Route } from '../../route';

export interface RouteBuilder<Information, GenericRouter, RequestHandler> {
   
    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;

    supportsRouter(router: GenericRouter): boolean;
    buildRoute(router: GenericRouter): Route<Information, GenericRouter, RequestHandler>;
}