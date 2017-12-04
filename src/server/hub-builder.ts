import { TsFramework } from './ts-framework';
import { MiddlewareReader, RouteReader } from '../routed-controller';
import { Server, ServerConfigurator } from "./";
import { ControllerLoader, InversifyContainer, HubContainer, Types } from "../"
import { Hub } from "./hub";

export class HubBuilder {

    private supportedServers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[] = [];
    private tsFramework: TsFramework;
    private container: HubContainer;

    private static _instance: HubBuilder;
    public static get instance() {
        return this._instance || (this._instance = new HubBuilder());
    }

    private constructor() {

    }

    public withContainer(container: HubContainer): this {
        this.container = container;
        return this;
    }

    public withFramework(tsFramework: TsFramework): this {
        this.tsFramework = tsFramework;
        return this;
    }

    public withServerSupport<T extends Server>(server: T, serverConfigurator?: ServerConfigurator<T>): this {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }

    public buildHub(): Hub {

        this.initializeContainer()
            .initializeFramework();

        var controllerLoader = this.tsFramework.setupFramework();

        return new Hub(
            this.supportedServers,
            this.container,
            controllerLoader);
    }

    private initializeFramework(): this {
        if(!this.tsFramework) {
            throw "No framework was configured";
        }

        return this;
    }

    private initializeContainer(): this {
        this.container = this.container || new InversifyContainer();
        this.container.bind(Types.Container).toConstantValue(this.container);
        return this;
    }

}