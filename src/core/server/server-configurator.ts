import {Server} from "./server";

export interface ServerConfigurator<T extends Server> {
    configureServer(server: T): void;
}