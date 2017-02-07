import { Container } from "inversify";

export interface InjectorConfigurator {
    configure(container: Container): void;
}