import { MetadataRouteReader, MetadataMiddlewareReader, MetadataControllerLoader } from '../../metadata-core';
import { MiddlewareReader, RouteReader } from '../routed-controller';
import { Server, ServerConfigurator } from "./";
import { ControllerActivator, ControllerLoader, InversifyContainer, HubContainer } from "../"
import { Hub } from "./hub";

export class HubBuilder {

    private supportedServers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[] = [];

    private controllerLoader: ControllerLoader;
    private routeReader: RouteReader;
    private middlewareReader: MiddlewareReader;

    private container: HubContainer;

    private static _instance: HubBuilder;
    public static get instance() {
        return this._instance || (this._instance = new HubBuilder());
    }

    private constructor() {

    }

    public setContainer(container: HubContainer): this {
        this.container = container;
        return this;
    }

    public setControllerLoader(controllerLoader: ControllerLoader): this {
        this.controllerLoader = controllerLoader;
        return this;
    }

    public setRouteReader(routeReader: RouteReader): this {
        this.routeReader = routeReader;
        return this;
    }

    public setMiddlewareReader(middlewareReader: MiddlewareReader): this {
        this.middlewareReader = middlewareReader;
        return this;
    }

    public setServerSupport<T extends Server>(server: T, serverConfigurator?: ServerConfigurator<T>): this {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }

    public buildHub(): Hub {

        var container = this.container || new InversifyContainer();
        var controllerLoader = this.controllerLoader || new MetadataControllerLoader();

        var routeReader = this.routeReader || new MetadataRouteReader();
        var middlewareReader = this.middlewareReader || new MetadataMiddlewareReader();
        
        return new Hub(
            this.supportedServers,
            container,
            controllerLoader);
    }

    private setupRouteReader(routeReader: RouteReader, container: HubContainer): void {

    }

    private setupMiddlewareReader(middlewareReader: MiddlewareReader, container: HubContainer): void {
        
    }

}