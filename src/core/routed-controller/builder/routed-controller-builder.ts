import {ControllerBuilder, ControllerActivator, Controller, Server} from "../../../core";
import {RoutedController} from "../routed-controller";
import {Middleware} from "../middleware";
import {Route} from "../route";
import * as _ from "lodash";

export abstract class RoutedControllerBuilder<
    Information, 
    GenericRouter,
    GenericRoutedController extends RoutedController<Information, GenericRouter>> {
    
    public information: Information;
    public target: any;
    
    constructor(){
    }

    public buildController() : Controller{
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware();
        controller.routes = this.buildControllerRoutes();

        return controller;
    }

    public abstract supportsServer(server: Server) : boolean;
    protected abstract buildRoutedController() : GenericRoutedController;
    protected abstract buildControllerMiddleware(): Middleware<GenericRouter>[];
    protected abstract buildControllerRoutes(): Route<GenericRouter>[];
    
}