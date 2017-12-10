import { ConsoleLogger } from './../logging/console-logger';
import { TsHubLogger } from './../logging/ts-hub-logger';
import { TsFramework } from './ts-framework';
import { MiddlewareReader, RouteReader } from '../routed-controller';
import { Server, ServerConfigurator } from "./";
import { ControllerLoader, InversifyContainer, HubContainer, Types } from "../"
import { Hub } from "./hub";

export class HubBuilder {

    protected supportedServers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[] = [];
    protected tsFramework: TsFramework;
    protected container: HubContainer;
    protected logger: TsHubLogger;

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
    
    public withLogger(logger: TsHubLogger): this {
        this.logger = logger;
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
            .initializeLogger()
            .initializeFramework();

        var controllerLoader = this.tsFramework.setupFramework(this.container);

        return new Hub(
            this.supportedServers,
            this.container,
            controllerLoader);
    }

    private initializeFramework(): this {
        if(!this.tsFramework) {
            var noFramework = "No framework was configured"; 
            this.logger.crit(noFramework);
            throw noFramework;
        }

        return this;
    }

    private initializeLogger(): this {
        this.logger = this.logger || new ConsoleLogger()
        this.container.bind(Types.TsHubLogger).toConstantValue(this.logger);
        return this;
    }

    private initializeContainer(): this {
        this.container = this.container || new InversifyContainer()
        this.container.bind(Types.Container).toConstantValue(this.container);
        return this;
    }

}