import { TsFramework } from './ts-framework';
import { RouteReader, ControllerLoader, MiddlewareReader, FunctionReader, ParameterReader, Types, HubContainer } from '../index';

export abstract class RoutedTsFramework implements TsFramework {
    
    public constructor(
        public readonly controllerLoader: ControllerLoader,
        public readonly routeReader: RouteReader,
        public readonly middlewareReader: MiddlewareReader,
        public readonly functionReader: FunctionReader,
        public readonly paramsReader: ParameterReader) {
    }

    public setupFramework(container: HubContainer): ControllerLoader{ 
        this.setupRouteReader(container)
            .setupMiddlewareReader(container)
            .setupFunctionReader(container)
            .setupParamsReader(container);

        return this.GetControllerLoader();
    }
    
    private setupRouteReader(container: HubContainer): this {
        this.setupInstance(Types.RouteReader, this.routeReader, container);
        return this;
    }

    private setupMiddlewareReader(container: HubContainer): this {
        this.setupInstance(Types.MiddlewareReader, this.middlewareReader, container);
        return this;
    }
    
    private setupFunctionReader(container: HubContainer): this {
        this.setupInstance(Types.FunctionReader, this.functionReader, container);
        return this;
    }

    private setupParamsReader(container: HubContainer): this {
        this.setupInstance(Types.ParamsReader, this.paramsReader, container);
        return this;
    }

    private setupInstance(symbol: symbol, instance: Object, container: HubContainer) {
        container.bind(symbol).toConstantValue(instance);
    }

    protected abstract GetControllerLoader(): ControllerLoader;

}