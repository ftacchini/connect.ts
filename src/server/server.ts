import { Container } from "inversify";
import { HubContainer } from "../index";

export interface Server {
    application: any;
    setupDependencies(container: HubContainer): void;
    getStatus(): string;
    run(): Promise<any>;
    stop(): Promise<any>;
}