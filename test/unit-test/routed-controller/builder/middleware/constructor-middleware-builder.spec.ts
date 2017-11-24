import { ConstantParameterBuilder } from './../../../../../src/routed-controller/builder/parameter/constant-parameter-builder';
import { Handler } from './../../../../../src/routed-controller/builder/middleware/handler';
import { TsHubLogger } from './../../../../../src/logging/ts-hub-logger';
import { ControllerActivator } from './../../../../../src/routed-controller/activator/controller-activator';
import { ConstructorMiddlewareBuilder } from './../../../../../src/routed-controller/builder/middleware';

describe("ConstructorMiddlewareBuilder", () => {

    class DummyConstructorMiddlewareBuilder extends ConstructorMiddlewareBuilder<any, any, any> {
        protected priority: number = 0;
        public supportsRouter(router: any): boolean {
            return true;
        }
    }

    let constructorMiddlewareBuilder: ConstructorMiddlewareBuilder<any, any, any>;
    let logger: TsHubLogger;
    let controllerActivator: ControllerActivator<any, any>;

    beforeEach(() => {
        controllerActivator = jasmine.createSpyObj<ControllerActivator<any, any>>(
            "controllerActivator", 
            ["buildControllerActivationMiddleware"]);
        logger = jasmine.createSpyObj<TsHubLogger>("logger", ["debug"]);
        constructorMiddlewareBuilder = new DummyConstructorMiddlewareBuilder(controllerActivator, logger);
    })

    describe("buildMiddleware", () => {

        it("should build a new activator passing information as the first parameter", () => {
            //arrange
            var router = {};
            var middlewareConstructor = class ImMiddleware implements Handler<any> { handleRequest(): void { }; };
            constructorMiddlewareBuilder.setMiddlewareConstructor(middlewareConstructor);

            //act
            constructorMiddlewareBuilder.buildMiddleware(router);

            //assert
            expect(controllerActivator.buildControllerActivationMiddleware).toHaveBeenCalledWith(
                middlewareConstructor.prototype,
                "handleRequest",
                router,
                [jasmine.any(ConstantParameterBuilder)]
            );
        })

    })

})