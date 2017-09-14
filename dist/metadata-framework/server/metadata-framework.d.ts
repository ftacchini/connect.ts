import { HubContainer } from './../../core/container/hub-container';
import { ParameterReader, FunctionReader, MiddlewareReader, RouteReader, ControllerLoader, TsFramework } from './../../core';
export declare class MetadataFramework implements TsFramework {
    private container;
    constructor(container: HubContainer);
    setupFramework(): ControllerLoader;
    private setupRouteReader();
    private setupMiddlewareReader();
    private setupFunctionReader();
    private setupParamsReader();
    private setupInstance(symbol, instance);
    private _controllerLoader;
    readonly controllerLoader: ControllerLoader;
    private _routeReader;
    readonly routeReader: RouteReader;
    private _middlewareReader;
    readonly middlewareReader: MiddlewareReader;
    private _functionReader;
    readonly functionReader: FunctionReader;
    private _paramsReader;
    readonly paramsReader: ParameterReader;
}
