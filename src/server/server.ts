import { Container } from "inversify";

export interface Server {
    application: any;
    run(): Promise<boolean>;
    stop(): Promise<boolean>;
}