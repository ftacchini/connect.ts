import { Application } from "express";
import { ApplicationConfiguration } from "./application-configuration.config";

export interface ApplicationConfigurator {
    configure(app: Application, config: ApplicationConfiguration): void;
}