import * as express from "express";
import { PropertyRoute } from "./property-route.core"

export class ControllerRouter{
        constructor(
            public router?: express.Router,
            public controllerPath?: string
    ) {

    }

    public propertyRoutes: PropertyRoute[] = [];
}