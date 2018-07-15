import { TsFramework } from './ts-framework';
import { RouteReader, ControllerLoader, MiddlewareReader, ActivationContextProvider, ParameterReader, Types, HubContainer } from '../index';

export class RoutedTsFramework implements TsFramework {

    public constructor(
        public readonly controllerLoader: ControllerLoader,
        public readonly routeReader: RouteReader,
        public readonly middlewareReader: MiddlewareReader,
        public readonly activationContextProvider: ActivationContextProvider,
        public readonly paramsReader: ParameterReader) {
    }

    public setupFramework(container: HubContainer): ControllerLoader {
        this.setupRouteReader(container)
            .setupMiddlewareReader(container)
            .setupActivationContextProvider(container)
            .setupParamsReader(container);

        return this.controllerLoader;
    }

    private setupRouteReader(container: HubContainer): this {
        this.setupInstance(Types.RouteReader, this.routeReader, container);
        return this;
    }

    private setupMiddlewareReader(container: HubContainer): this {
        this.setupInstance(Types.MiddlewareReader, this.middlewareReader, container);
        return this;
    }

    private setupActivationContextProvider(container: HubContainer): this {
        this.setupInstance(Types.ActivationContextProvider, this.activationContextProvider, container);
        return this;
    }

    private setupParamsReader(container: HubContainer): this {
        this.setupInstance(Types.ParamsReader, this.paramsReader, container);
        return this;
    }

    private setupInstance(symbol: symbol, instance: Object, container: HubContainer) {
        container.bind(symbol).toConstantValue(instance);
    }
}