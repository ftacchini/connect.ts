import { Application } from "express";
import { ApplicationConfiguration } from "./application-configuration.core";

export interface ApplicationConfigurator {
    configure(app: Application, config: ApplicationConfiguration): void;
}