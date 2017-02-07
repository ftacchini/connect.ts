import * as express from "express";
import { PropertyRoute } from "./property-route.core"

export class ControllerRouter{
        constructor(
            public controllerPath?: string
    ) {

    }

    public propertyRoutes: PropertyRoute[] = [];
}