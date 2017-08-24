"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routed_controller_1 = require("./../routed-controller");
const controller_1 = require("./../controller");
const core_1 = require("./../../core");
class MetadataFramework {
    constructor(container) {
        this.container = container;
    }
    setupFramework() {
        this.setupRouteReader()
            .setupMiddlewareReader()
            .setupFunctionReader()
            .setupParamsReader();
        return this.controllerLoader;
    }
    setupRouteReader() {
        this.setupInstance(core_1.Types.RouteReader, this.routeReader);
        return this;
    }
    setupMiddlewareReader() {
        this.setupInstance(core_1.Types.MiddlewareReader, this.middlewareReader);
        return this;
    }
    setupFunctionReader() {
        this.setupInstance(core_1.Types.FunctionReader, this.functionReader);
        return this;
    }
    setupParamsReader() {
        this.setupInstance(core_1.Types.ParamsReader, this.paramsReader);
        return this;
    }
    setupInstance(symbol, instance) {
        this.container.bind(symbol).toConstantValue(instance);
    }
    get controllerLoader() {
        return this._controllerLoader || (this._controllerLoader = new controller_1.MetadataControllerLoader());
    }
    get routeReader() {
        return this._routeReader || (this._routeReader = new routed_controller_1.MetadataRouteReader(this.container));
    }
    get middlewareReader() {
        return this._middlewareReader || (this._middlewareReader = new routed_controller_1.MetadataMiddlewareReader());
    }
    get functionReader() {
        return this._functionReader || (this._functionReader = new routed_controller_1.MetadataFunctionReader(this.container));
    }
    get paramsReader() {
        return this._paramsReader || (this._paramsReader = new routed_controller_1.MetadataParamsReader());
    }
}
exports.MetadataFramework = MetadataFramework;
//# sourceMappingURL=metadata-framework.js.map