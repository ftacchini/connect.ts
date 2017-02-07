import * as express from "express";
import { Container } from "inversify";
import { TYPES } from "./types.constant";
import { DefaultRouteMapper, DefaultControllerLoader } from "../core/routing/routing.module";

export class DefaultInjectorConfigurator {
    configure(container: Container) {
    };
}