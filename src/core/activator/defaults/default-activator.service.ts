import { Activator } from "../activator.service";
import { Request, Response, RequestHandler, NextFunction } from "express";
import { RouterConfiguration } from "../../configuration/configuration.module";
import { Container } from "inversify";

export class DefaultActivator implements Activator {

    constructor(private routerConfig: RouterConfiguration,
                private container: Container){

    }

    createActivatorMiddleware(
        controller: any,
        property: string): RequestHandler {
        return (req: Request, res: Response, nextCallback: NextFunction) =>
            this.activateController(controller, controllerMetadata, property, req, res, nextCallback);
    }

    private activateController(
        controller: any,
        property: string,
        req: Request,
        res: Response,
        nextCallback: NextFunction){

        if(!controller.symbol){
            controller.symbol = Symbol(controller.name);
            this.container.bind(controller.symbol).toProvider(controller);
        }

        var controllerInstance = this.container.get(controller.symbol);
        var requestHandler = controllerInstance && controllerInstance[property];

        if(requestHandler){
            return requestHandler;
            /*Match params*/


        }
        else {
            /*
            Handler Error
             */
        }
    }

    private create

}