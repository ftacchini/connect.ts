import { Container } from "inversify";

export interface Server {
    application: any;
    run(): void;
    stop(): void;
}