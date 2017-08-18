import { MetadataRouteReader, MetadataMiddlewareReader, MetadataControllerLoader } from '../../metadata-core';
import { MiddlewareReader, RouteReader } from '../routed-controller';
import { Server, ServerConfigurator } from "./";
import { ControllerActivator, ControllerLoader, InversifyContainer, HubContainer, TYPES } from "../"
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

        var container = this.setupCountainer();
        this.setupRouteReader(container);
        this.setupMiddlewareReader(container);

        var controllerLoader = this.controllerLoader || new MetadataControllerLoader();
        
        return new Hub(
            this.supportedServers,
            container,
            controllerLoader);
    }

    private setupCountainer(): HubContainer {
        this.container = this.container || new InversifyContainer();
        TYPES.Container = Symbol("Container");
        this.container.bind(TYPES.Container).toConstantValue(this.container);
        
        return this.container;
    }

    private setupRouteReader(container: HubContainer): void {
        this.routeReader = this.routeReader || new MetadataRouteReader();
        TYPES.RouteReader = Symbol("RouteReader");
        this.container.bind(TYPES.RouteReader).toConstantValue(this.routeReader);
    }

    private setupMiddlewareReader(container: HubContainer): void {
        this.middlewareReader = this.middlewareReader || new MetadataMiddlewareReader();
        TYPES.MiddlewareReader = Symbol("MiddlewareReader");
        this.container.bind(TYPES.MiddlewareReader).toConstantValue(this.middlewareReader);
    }

}