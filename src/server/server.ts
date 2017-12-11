import { Container } from "inversify";

export interface Server {
    application: any;
    run(): Promise<any>;
    stop(): Promise<any>;
}