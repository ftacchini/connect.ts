import * as express from "express";
import { PropertyRoute } from "./property-route.model"

export class ControllerRoutes{
        constructor(
            public controllerPath?: string
    ) {

    }

    public propertyRoutes: PropertyRoute[] = [];
}