import { TsFramework } from './ts-framework';
import { Server, ServerConfigurator } from "./";
import { HubContainer } from "../";
import { Hub } from "./hub";
export declare class HubBuilder {
    private supportedServers;
    private tsFramework;
    private container;
    private static _instance;
    static readonly instance: HubBuilder;
    private constructor();
    setContainer(container: HubContainer): this;
    setFramework(tsFramework: TsFramework): this;
    setServerSupport<T extends Server>(server: T, serverConfigurator?: ServerConfigurator<T>): this;
    buildHub(): Hub;
    private initializeFramework();
    private initializeContainer();
}
