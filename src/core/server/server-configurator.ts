import { HubContainer } from './../container';
import {Server} from "./server";

export interface ServerConfigurator<T extends Server> {
    configureServer(server: T, container: HubContainer): void;
}